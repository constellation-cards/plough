import React, { useState, useEffect } from "react"
import { Client, Room } from "colyseus.js"

// TODO: get from configuration
const client = new Client("ws://localhost:3000")

const App = (props: object) => {
    const [room, setRoom] = useState<Room>(null)
    const [gameState, setGameState] = useState(null)

    useEffect(() => {
        async function connect() {
            try {
                // TODO: get from configuration
                const room = await client.joinOrCreate("constellation-cards")

                room.onStateChange((newState) => {
                    console.log("State changed");
                    setGameState(Object.assign({}, newState))
                })

                room.onLeave((code) => {
                    console.log("You've been disconnected.")
                })

                setRoom(room)
            } catch (e) {
                console.error(e)
            }
        }

        connect()
    }, [])

    return (
        <pre>
            {JSON.stringify(gameState, null, 2)}
        </pre>
    )
}

export default App
