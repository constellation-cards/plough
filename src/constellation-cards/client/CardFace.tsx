import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { map } from "ramda"
import React from "react"

import { Card } from "./state/Card"

interface CardFaceProps {
    card: Card
    isFlipped?: boolean | undefined;
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
export default ({ card: { front, back, flipped }, isFlipped, children }: CardFaceProps) => {
    if (isFlipped === undefined) {
        isFlipped = flipped;
    }
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
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item xs={12}>
                    {children}
                </Grid>
                <Grid item xs={12}>
                    <strong>
                        <u>{name}</u>
                    </strong>
                </Grid>
                <Grid item xs={12}>
                    {map(
                        (s) => (
                            <p>{formatDesc(s)}</p>
                        ),
                        (desc || "").split("\n")
                    )}
                </Grid>
            </Grid>
        </Paper>
    )
}
