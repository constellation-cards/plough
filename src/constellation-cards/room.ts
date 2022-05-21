import { ConstellationCardFace, ConstellationCardPresetFlipRule, getCards, getPresets, getStacks } from '@constellation-cards/cards'
import { Room } from "colyseus"
import { randomBytes } from "crypto"

import { Card, CardCollection, CardFace, ConstellationCardsState, Uid } from "./state"

// import pool from "../server/database"

function generateUid() {
    return randomBytes(16).toString("hex")
}

import { CardActionNames } from "./constants"
import { readlink } from 'fs'

interface RoomCreateOptions {
    gameId?: string;
}

interface CardDesc {
    name: string;
    description: string;
}

export interface UpsertCardAction {
    uid?: Uid;
    front: CardDesc;
    back: CardDesc;
    flipped: boolean;
    home: Uid;
}

export interface CreateCollectionAction {
    name: string;
    preset: string;
    expanded: boolean;
}

export interface DeleteCollectionAction {
    uid: Uid;
}

export interface RenameCollectionAction {
    uid: Uid;
    name: string;
}

export interface MoveCardAction {
    cardUid: Uid;
    dest: Uid;
}

export interface FlipCardAction {
    cardUid: Uid;
}

function cardToDescription(face: ConstellationCardFace): string {
    const pieces = [`${face.description}\n`]
    if (face.prompts && face.prompts.length > 0) {
        const prompts = face.prompts.map(prompt => `- ${prompt}\n`).join('')
        pieces.push(prompts)
    }
    pieces.push(face.rule)
    return pieces.join('\n')
}

export class ConstellationCardsRoom extends Room<ConstellationCardsState> {
    // Given a card, move it from its current location to a named destination
    moveCard(card: Card, dest: Uid): CardCollection {
        if (card.location != dest) {
            const destCollection = this.state.collections.get(dest)
            if (destCollection) {
                const startCollection = this.state.collections.get(card.location)
                if (startCollection) {
                    const idx = startCollection.cards.findIndex((myCard) => myCard.uid === card.uid)
                    startCollection.cards.splice(idx, 1)
                }
                destCollection.cards.push(card)
                card.location = dest
            } else {
                console.error(`Unable to move card ${card.uid} to destination UID: ${dest}`)
            }
            return destCollection
        } else {
            console.error(`Attempt to move card UID ${card.uid} to its own location`)
            return null
        }
    }

    // room has been created: bring your own logic
    async onCreate(options: RoomCreateOptions) {
        this.setMetadata({
            gameId: options.gameId || generateUid()
        })

        // TODO: load state from MongoDB using gameId as primary key
        // If no state was found, setState using the default state
        this.setState(new ConstellationCardsState())

        // Import default stacks
        for (let stack of getStacks()) {
            const collection = new CardCollection();
            collection.uid = stack.uid
            collection.name = stack.name
            collection.expanded = false
            this.state.collections.set(collection.uid, collection)
        }

        // Create a blank spread
        const defaultCollection = new CardCollection();
        defaultCollection.uid = "default";
        defaultCollection.name = "Default";
        defaultCollection.expanded = true;
        this.state.collections.set("default", defaultCollection);

        // TODO: quantity

        for (let card of getCards()) {
            const newCard = new Card()
            newCard.uid = card.uid
            newCard.name = `${card.front.name} / ${card.back.name}`
            newCard.flipped = false
            newCard.home = card.stack // this is a UID
            newCard.location = card.stack
            newCard.front = new CardFace()
            newCard.front.name = card.front.name
            newCard.front.description = cardToDescription(card.front)
            newCard.back = new CardFace()
            newCard.back.name = card.back.name
            newCard.back.description = cardToDescription(card.back)
            this.state.cards.set(card.uid, newCard)
            const collection = this.state.collections.get(newCard.home)
            collection.cards.push(newCard)
        }

        // BEGIN state management actions

        this.onMessage(CardActionNames.UPSERT_CARD, (_client, data: UpsertCardAction) => {
            let card: Card;

            if (data.uid) {
                card = this.state.cards.get(data.uid)
            } else {
                card = new Card()
                card.uid = generateUid()
            }
            card.front = new CardFace()
            card.front.name = data.front.name
            card.front.description = data.front.description
            card.back.name = data.back.name
            card.back.description = data.back.description
            card.flipped = data.flipped

            card.name = (card.front.name == card.back.name) ? card.front.name : `${card.front.name} / ${card.back.name}`

            // If this is a brand new card,
            // give it a home and add it
            if (!data.uid) {
                this.state.cards.set(card.uid, card)

                card.home = data.home
                card.location = data.home
    
                const collection = this.state.collections.get(card.home)
                if (collection) {
                    collection.cards.push(card)
                } else {
                    console.error(`Wanted to add card with invalid home UID: ${card.home}`)
                }    
            }
        })

        // TODO: delete-card

        this.onMessage(CardActionNames.CREATE_COLLECTION, (_client, data: CreateCollectionAction) => {
            const collection = new CardCollection()
            collection.uid = generateUid()
            collection.name = data.name
            collection.expanded = data.expanded

            this.state.collections.set(collection.uid, collection)

            for (let preset of getPresets()) {
                if (preset.name === data.preset) {
                    for (let source of preset.sources) {
                        const presetCollection = this.state.collections.get(source.stack)
                        if (presetCollection) {
                            for (let i = 0; i < source.quantity; i++) {
                                if (presetCollection.cards.length > 0) {
                                    const randomCard = presetCollection.cards[Math.floor(Math.random() * presetCollection.cards.length)];
                                    this.moveCard(randomCard, collection.uid)
                                    switch (source.flipRule) {
                                        case ConstellationCardPresetFlipRule.FRONT:
                                            randomCard.flipped = false;
                                            break;
                                        case ConstellationCardPresetFlipRule.BACK:
                                            randomCard.flipped = true;
                                            break;
                                        case ConstellationCardPresetFlipRule.RANDOM:
                                            randomCard.flipped = (Math.random() >= 0.5) ? true : false;
                                            break;
                                    }
                                }    
                            }
                        }
                    }
                }
            }

            this.broadcast("announcement", `A new ${data.expanded ? 'spread' : 'stack'} named '${data.name} was created`)
        })

        this.onMessage(CardActionNames.DELETE_COLLECTION, (_client, data: DeleteCollectionAction) => {
            // Return cards in this collection to their home
            const collection = this.state.collections.get(data.uid)
            if (collection) {
                collection.cards.forEach((card: Card) => {
                    this.moveCard(card, card.home)
                })
                // Remove the collection
                this.state.collections.delete(data.uid)
                // TODO: delete any cards that were still found in this collection, as it might be some cards' home

                this.broadcast("announcement", `A ${collection.expanded ? 'spread' : 'stack'} named '${collection.name} was deleted`)
            } else {
                console.error(`Wanted to delete collection with invalid UID: ${data.uid}`)
            }
        })

        this.onMessage(CardActionNames.RENAME_COLLECTION, (_client, data: RenameCollectionAction) => {
            const collection = this.state.collections.get(data.uid)
            if (collection) {
                const oldName = `${collection.name}`
                collection.name = data.name

                this.broadcast("announcement", `The collection '${oldName}' has been renamed to '${collection.name}'`)
            }
        })

        this.onMessage(CardActionNames.MOVE_CARD, (_client, data: MoveCardAction) => {
            const card: Card = this.state.cards.get(data.cardUid)
            if (card) {
                const collection = this.moveCard(card, data.dest)

                this.broadcast("announcement", collection ? `${card.name} was moved to ${collection.name}` : `${card.name} was not moved`)
            }
        })

        this.onMessage(CardActionNames.FLIP_CARD, (_client, data: FlipCardAction) => {
            const card: Card = this.state.cards.get(data.cardUid)
            if (card) {
                card.flipped = !card.flipped

                this.broadcast("announcement", `${card.name} was flipped to its ${card.flipped ? 'front' : 'back'} side`)
            }
        })

        // END state management actions

        console.log("Room created")
    }

    // client joined: bring your own logic
    async onJoin(client: any, options: any) {
        console.log("Room joined")
    }

    // client left: bring your own logic
    async onLeave(client: any, consented: any) {
        console.log("Room left")
    }

    // room has been disposed: bring your own logic
    async onDispose() {
        // TODO: persist game state to MongoDB
        console.log("Room disposed")
    }
}
