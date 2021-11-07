import * as readline from "readline"
import parseArgvString from "string-to-argv"
const minimist = require("minimist")

// connection.ts (client-side)
import { Client } from "colyseus.js"
const client = new Client("ws://localhost:3000")

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

async function play() {
    const room = await connect()

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    rl.prompt()
    for await (const line of rl) {
        const parsed = minimist(parseArgvString(line))
        // The first word is considered a command, and the rest of the object is treated as data
        room.send(parsed._[0], parsed)
        rl.prompt()
    }
}

play().catch(console.error)
