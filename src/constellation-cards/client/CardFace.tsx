import { Paper, Typography } from "@mui/material"
import { map, split } from "ramda"
import React from "react"

import { Card } from "./state/Card"

interface CardFaceProps {
    card: Card
    children?: React.ReactNode
}

function formatDesc(line: string) {
    const trimmed = line.trim()
    if (trimmed.startsWith("//")) {
        return <i>{trimmed.substr(2)}</i>
    } else {
        return trimmed
    }
}

/**
 * Show a visual representation of a card, including title,
 * body, icons, etc.
 * Does not include card actions (deal, discard, etc.)
 *
 * This is meant both for expanded collections and card mouseover/preview mode.
 */
export default ({ card: { flipped, front, back } }: CardFaceProps) => {
    const name = flipped ? back.name : front.name
    const desc = flipped ? back.description : front.description

    return (
        <Paper
            style={{
                width: "4in",
                minHeight: "6in",
                padding: "1em",
            }}
        >
            <strong>
                <u>{name}</u>
            </strong>
            <>
                {map(
                    (s) => (
                        <p>{formatDesc(s)}</p>
                    ),
                    (desc || "").split("\n")
                )}
            </>
        </Paper>
    )
}
