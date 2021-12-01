import React from "react"
import { map } from "ramda"

import { CardCollection } from "./state/CardCollection"
import { Card } from "./state/Card"
import CollapsedCard from "./CollapsedCard"
import { List, Typography } from "@mui/material"

interface CollapsedCollectionProps {
    collection: CardCollection
    children?: React.ReactNode
}

export default ({ collection: { name, cards } }: CollapsedCollectionProps) => {
    return (
        <>
            <Typography variant="body1" component="strong">
                {name}
            </Typography>
            <List component="div" disablePadding>
                {map(
                    (card: Card) => (
                        <CollapsedCard key={card.uid} card={card} />
                    ),
                    cards
                )}
            </List>
        </>
    )
}
