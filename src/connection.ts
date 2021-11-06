// connection.ts (client-side)
import { Client } from "colyseus.js";
const client = new Client("ws://localhost:2567");

async function connect () {
    try {
        const room = await client.joinOrCreate("my_room");

    room.onStateChange((newState) => {
        console.log("New state:", newState);
    });

    room.onLeave((code) => {
        console.log("You've been disconnected.");
    });

    } catch (e) {
        console.error("Couldn't connect:", e);
    }
}

connect().catch(console.error)