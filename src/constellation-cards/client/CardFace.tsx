import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { map } from "ramda"
import React from "react"

import { Card } from "./state/Card"

interface CardFaceProps {
    card: Card
    isFlipped?: boolean | undefined
    children?: React.ReactNode
}

function formatDesc(line: string) {
    const trimmed = line.trim()
    if (trimmed.startsWith("//")) {
        return <em>{trimmed.substring(2)}</em>
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
export default ({
    card: { front, back, flipped },
    isFlipped,
    children,
}: CardFaceProps) => {
    if (isFlipped === undefined) {
        isFlipped = flipped
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
            {children}
            <Box sx={{ textAlign: "center", width: "100%" }}>
                <Typography fontSize="h6.fontSize" fontWeight="bold" sx={{borderBottom: 1}}>{name}</Typography>
            </Box>
            {map(
                (s) => (
                    <>{formatDesc(s)}<br /></>
                ),
                (desc || "").split("\n")
            )}
        </Paper>
    )
}
