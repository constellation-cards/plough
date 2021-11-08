import React, { useState, useEffect } from "react"
import { connect } from "./connection"

export default (props: object) => {
    const [room, setRoom] = useState(null)
    const [gameState, setGameState] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function connectToGame() {
            connect(setRoom, setGameState, setError)
        }
        connectToGame()
    }, [])

    return (
        <div>
            {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : <span />}
            {room ? <span /> : <h1>Connecting...</h1>}
            {room ? <h1>Room Connected</h1> : <span />}
            {gameState ? <pre>{JSON.stringify(gameState, null, 2)}</pre> : <span />}
        </div>
    )
}
