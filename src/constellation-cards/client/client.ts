// connection.ts (client-side)
import { Client } from "colyseus.js"
const client = new Client("ws://localhost:2567")

async function connect() {
    try {
        const room = await client.joinOrCreate("constellation-cards")

        room.onStateChange((newState) => {
            console.log("New state:", JSON.stringify(newState, null, 2))
        })

        room.onLeave((code) => {
            console.log("You've been disconnected.")
        })

        return room
    } catch (e) {
        console.error("Couldn't connect:", e)
    }
}
