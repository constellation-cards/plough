import { Room } from "colyseus.js"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

import ConstellationCardsGame from "../constellation-cards/client/ConstellationCardsGame"
import { connect } from "./connection"

interface GameContainerProps {
    roomName: string
    children?: React.ReactNode
}

export default (props: GameContainerProps) => {
    const [room, setRoom] = useState<Room<any>>(null)
    const [error, setError] = useState(null)
    const { gameId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function connectToGame() {
            console.log("Connecting")
            await connect(props.roomName, gameId, setRoom, setError)
        }
        connectToGame()
    }, [])

    useEffect(() => {
        if (room) {
            console.log("Pushing state")
            navigate(`/game/${gameId}`)    
        }
    }, [room])

    return (
        <div>
            {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : <span />}
            {room ? <ConstellationCardsGame room={room} /> : <h1>Connecting...</h1>}
        </div>
    )
}
