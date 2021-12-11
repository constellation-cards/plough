import { Paper, Typography } from "@mui/material"
import { map, split } from "ramda"
import React from "react"

import { Card } from "./state/Card"

interface CardFaceProps {
    card: Card;
    children?: React.ReactNode;
}

/**
 * Show a visual representation of a card, including title,
 * body, icons, etc.
 * Does not include card actions (deal, discard, etc.)
 * 
 * This is meant both for expanded collections and card mouseover/preview mode.
 */
export default ({
    card: { flipped, front, back }
}: CardFaceProps) => {
    const name = flipped ? front.name : back.name
    const desc = flipped ? front.description : back.description

    return (
        <Paper variant="outlined" sx={{
            "width": "4in",
            "height": "6in"
        }}>
            <h4>{name}</h4>
            {map((line: string) => <p>{line}</p>, split("\n", desc))}
        </Paper>
    )
}
