import { Box, Paper, Typography } from "@mui/material"
import { map } from "ramda"
import React from "react"

import { PloughCard } from "./state/PloughCard"

interface CardFaceProps {
    card: PloughCard
    isExpanded?: boolean | undefined
    isFlipped?: boolean | undefined
    onClick?: any
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
    isExpanded,
    isFlipped,
    onClick,
    children,
}: CardFaceProps) => {
    if (isFlipped === undefined) {
        isFlipped = flipped
    }
    const name = isFlipped ? back.name : front.name
    const desc = isFlipped ? back.description : front.description

    return (
        <Paper
            style={{
                width: "4in",
                minHeight: (isExpanded ? "6in" : "inherit"),
                padding: "1em",
            }}
            onClick={onClick}
        >
            {children}
            <Box sx={{ textAlign: "center", width: "100%" }}>
                <Typography fontSize="h6.fontSize" fontWeight="bold" sx={{borderBottom: (isExpanded ? 1 : "inherit")}}>{name}</Typography>
            </Box>
            {isExpanded ?
            map(
                (s) => (
                    <>{formatDesc(s)}<br /></>
                ),
                (desc || "").split("\n")
            ) : <React.Fragment />}
        </Paper>
    )
}
