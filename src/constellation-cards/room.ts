// rooms/MyRoom.ts (server-side, room file)
import { randomBytes } from "crypto"
import { Room } from "colyseus"
import { ConstellationCardsState, CardCollection, Card, Uid } from "./state"

function generateUid() {
    return randomBytes(16).toString("hex")
}

interface CreateCardAction {
    name: string;
    description: string;
    home: Uid;
}

interface CreateCollectionAction {
    name: string;
    expanded: boolean;
}

interface DeleteCollectionAction {
    uid: Uid;
}

interface MoveCardAction {
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

        // BEGIN state management actions

        this.onMessage("create-card", (client, data: CreateCardAction) => {
            const card = new Card()
            card.uid = generateUid()
            card.name = data.name
            card.description = data.description
            card.flipped = false

            card.home = data.home
            card.location = data.home

            this.state.cards.set(card.uid, card)

            const collection = this.state.collections.get(card.home)
            if (collection) {
                collection.cards.push(card)
            } else {
                console.error(`Wanted to add card with invalid home UID: ${card.home}`)
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
