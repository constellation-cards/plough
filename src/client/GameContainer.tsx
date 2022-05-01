import React, { useEffect, useState } from "react"

import ConstellationCardsGame from "../constellation-cards/client/ConstellationCardsGame"
import { connect } from "./connection"

interface GameContainerProps {
    roomName: string
    children?: React.ReactNode
}

export default (props: GameContainerProps) => {
    const [room, setRoom] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function connectToGame() {
            console.log("Connecting")
            connect(props.roomName, setRoom, setError)
        }
        connectToGame()
    }, [])

    return (
        <div>
            {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : <span />}
            {room ? <ConstellationCardsGame room={room} /> : <h1>Connecting...</h1>}
        </div>
    )
}
