import { Button, Container } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

interface ConstellationCardsHomeProps {
    children?: React.ReactNode
}

export default (props: ConstellationCardsHomeProps) => {
    return (
        <Container>
            <h1>Constellation Cards</h1>

            <Button variant="contained" component={Link} to="/game">
                Play
            </Button>

            <p>
                This is the <strong>Plough</strong> game server,
                a custom Virtual Table Top (VTT) designed to play
                Constellation Cards.
            </p>

            <p>
                Click "Play" to jump into the demo game session!
            </p>

            <ul>
                <li><a href="https://constellation.cards/">constellation.cards</a></li>
                <li><a href="https://github.com/constellation-cards/plough">Github</a></li>
            </ul>
        </Container>
    )
}
