import { Room } from "colyseus"
// rooms/MyRoom.ts (server-side, room file)
import { randomBytes } from "crypto"
import { map, mapObjIndexed } from "ramda"

import { defaultState } from "./default-state"
import { Card, CardCollection, CardFace, ConstellationCardsState, Uid } from "./state"

function generateUid() {
    return randomBytes(16).toString("hex")
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
    expanded: boolean;
}

export interface DeleteCollectionAction {
    uid: Uid;
}

export interface MoveCardAction {
    cardUid: Uid;
    dest: Uid;
}

type FindCollectionCallback = (card: Card, collection: CardCollection) => void;

export class ConstellationCardsRoom extends Room<ConstellationCardsState> {
    // Given a card, move it from its current location to a named destination
    moveCard(card: Card, dest: Uid): void {
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
        } else {
            console.error(`Attempt to move card UID ${card.uid} to its own location`)
        }
    }

    // room has been created: bring your own logic
    async onCreate(options: any) {
        this.setState(new ConstellationCardsState())

        // Add data from default state
        mapObjIndexed((collectionData: Record<string, any>, uid, _idx) => {
            const collection = new CardCollection();
            collection.uid = uid;
            collection.name = collectionData.name;
            collection.expanded = collectionData.expanded;
            this.state.collections.set(uid, collection)
        }, defaultState.collections)

        const defaultCollection = new CardCollection();
        defaultCollection.uid = "default";
        defaultCollection.name = "Default";
        defaultCollection.expanded = true;
        this.state.collections.set("default", defaultCollection);

        map(cardData => {
            const card = new Card();
            card.uid = cardData.uid;
            card.name = cardData.name;
            card.flipped = cardData.flipped;
            card.home = cardData.home;
            card.location = cardData.home;
            card.front = new CardFace()
            card.front.name = cardData.front.name;
            card.front.description = cardData.front.description;
            card.back = new CardFace()
            card.back.name = cardData.back.name;
            card.back.description = cardData.back.description;
            this.state.cards.set(card.uid, card)
            const collection = this.state.collections.get(card.home)
            collection.cards.push(card)
        }, defaultState.cards)

        // BEGIN state management actions

        this.onMessage("upsert-card", (client, data: UpsertCardAction) => {
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

        this.onMessage("create-collection", (client, data: CreateCollectionAction) => {
            const collection = new CardCollection()
            collection.uid = generateUid()
            collection.name = data.name
            collection.expanded = data.expanded

            this.state.collections.set(collection.uid, collection)
        })

        this.onMessage("delete-collection", (client, data: DeleteCollectionAction) => {
            // Return cards in this collection to their home
            const collection = this.state.collections.get(data.uid)
            if (collection) {
                collection.cards.forEach((card: Card) => {
                    this.moveCard(card, card.home)
                })
                // Remove the collection
                this.state.collections.delete(data.uid)
                // TODO: delete any cards that were still found in this collection, as it might be some cards' home
            } else {
                console.error(`Wanted to delete collection with invalid UID: ${data.uid}`)
            }
        })

        this.onMessage("move-card", (client, data: MoveCardAction) => {
            const card: Card = this.state.cards.get(data.cardUid)
            if (card) {
                this.moveCard(card, data.dest)
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
