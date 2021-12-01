import { ColyseusTestServer, boot } from "@colyseus/testing";
import { Room } from "colyseus";
import { Room as ClientRoom } from "colyseus.js";

import appConfig from "../arena.config"
import { Card } from "./client/state/Card";
import { CardCollection } from "./client/state/CardCollection";
import { ConstellationCardsRoom } from "./room";

describe("room", () => {
    let colyseus: ColyseusTestServer;

    beforeAll(async () => colyseus = await boot(appConfig));
    afterAll(async () => await colyseus.shutdown());
  
    beforeEach(async () => await colyseus.cleanup());

    describe("onCreate", () => {
        const options: any = {}

        it("is initialized with a valid state", async () => {
            const room = await colyseus.createRoom("constellation-cards")
            const client1 = await colyseus.connectTo(room);
            await room.onCreate(options)
            expect(room.state).toHaveProperty("cards")
            expect(room.state).toHaveProperty("collections")
        })
    })

    describe("messages", () => {
        let room: Room<ConstellationCardsRoom>
        let client: ClientRoom<any>
        const options: any = {}

        const standardCollection: any = {
            name: "New Collection",
            expanded: true
        }

        const standardCard: any = {
            front: {
                name: "Front",
                description: "Description"
            },
            back: {
                name: "Back",
                description: "Description"
            },
            flipped: false,
        }

        beforeEach(async () => {
            room = await colyseus.createRoom("constellation-cards")
            client = await colyseus.connectTo(room)
            await room.onCreate(options)
        })

        describe("upsert-card", () => {
            xit("creates a new card", async () => {
                // Create a stack to hold the new card
                client.send("create-collection", standardCollection)
                await client.waitForNextPatch()

                // Find the UID for the stack we just created
                let home: string
                client.state.collections.forEach((collection: CardCollection) => {
                    home = collection.uid
                })

                client.send("upsert-card", {
                    ...standardCard,
                    home
                })
                await client.waitForNextPatch()

                // Card should have been created
                expect(client.state.cards.size).toEqual(1)
                let card: Card
                client.state.cards.forEach((myCard: Card) => {
                    card = myCard
                })
                expect(card.name).toEqual("Front / Back")
                expect(card.front.name).toEqual("Front")
                expect(card.back.name).toEqual("Back")
                expect(card.front.description).toEqual("Description")
                expect(card.back.description).toEqual("Description")
                expect(card.flipped).toBeFalsy()
                expect(card.home).toEqual(home)
                expect(card.location).toEqual(home)

                // Card should have been added to home stack
                client.state.collections.forEach((collection: CardCollection) => {
                    expect(collection.cards.length).toEqual(1)
                    expect(collection.cards[0].uid).toEqual(card.uid)
                })
            }, 10000)
        })

        describe("create-collection", () => {
            it("creates a collection", async () => {
                client.send("create-collection", standardCollection)
                await client.waitForNextPatch()
                expect(client.state.collections.size).toEqual(1)
                client.state.collections.forEach((collection: CardCollection) => {
                    expect(collection.name).toEqual("New Collection")
                    expect(collection.expanded).toEqual(true)
                })
            })
        })

        describe("delete-collection", () => {
            it("deletes a collection", async () => {
                client.send("create-collection", standardCollection)
                await client.waitForNextPatch()
                expect(client.state.collections.size).toEqual(1)

                let uid: string
                client.state.collections.forEach((collection: CardCollection) => {
                    uid = collection.uid
                })

                client.send("delete-collection", {uid})
                await client.waitForNextPatch()
                expect(client.state.collections.size).toEqual(0)
            })

            xit("removes cards from a deleted collection", async () => {

            })
        })

        describe("move-card", () => {
            xit("moves cards between collections", async () => {
                client.send("create-collection", { name: "A", expanded: false })
                await client.waitForNextPatch()

                client.send("create-collection", { name: "B", expanded: false })
                await client.waitForNextPatch()

                let a, b: string;
                client.state.collections.forEach((collection: CardCollection) => {
                    if (collection.name === "A") {
                        a = collection.uid
                    } else if (collection.name === "B") {
                        b = collection.uid
                    }
                })

                client.send("upsert-card", {
                    ...standardCard,
                    home: a
                })
                await client.waitForNextPatch()
                expect(client.state.collections.get(a).cards.length).toEqual(1)
                const cardUid = client.state.cards.entries()[0]

                client.send("move-card", {
                    cardUid,
                    dest: b
                })
                await client.waitForNextPatch()
                expect(client.state.collections.get(a).cards.length).toEqual(0)
                expect(client.state.collections.get(b).cards.length).toEqual(1)
                expect(client.state.collections.get(b).cards.has(cardUid)).toBeTruthy()
            })

            xit("does not change the sort order when a card is moved to its own location", async () => {

            })
        })
    })
})