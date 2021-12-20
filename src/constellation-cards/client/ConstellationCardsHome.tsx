import { Container } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

interface ConstellationCardsHomeProps {
    children?: React.ReactNode
}

export default (props: ConstellationCardsHomeProps) => {
    return (
        <Container>
            <h1>Constellation Cards</h1>

            <Link to="/game">Play</Link>
        </Container>
    )
}
