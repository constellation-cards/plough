import { Room } from "colyseus.js"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

import ConstellationCardsGame from "../constellation-cards/client/ConstellationCardsGame"
import { connect } from "./connection"

interface GameContainerProps {
    roomName: string
    children?: React.ReactNode
}

export default ({roomName}: GameContainerProps) => {
    const [room, setRoom] = useState<Room<any>>(null)
    const [error, setError] = useState(null)
    const { gameId } = useParams()
    const navigate = useNavigate()

    async function connectToGame() {
        console.log("Connecting")
        const newGameId = await connect(roomName, gameId, setRoom, setError)
        
        if (newGameId) {
            navigate(`/game/${newGameId}`)
        }
    }

    useEffect(() => {
        if (!room && !error) {
            connectToGame()
        }
    }, [room, error])

    return (
        <div>
            {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : <span />}
            {room ? <ConstellationCardsGame room={room} /> : <h1>Connecting...</h1>}
        </div>
    )
}
