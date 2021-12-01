import React from "react"
import { map } from "ramda"

import { CardCollection } from "./state/CardCollection"
import { Card } from "./state/Card"
import CollapsedCard from "./CollapsedCard"
import { List, Typography } from "@mui/material"
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"

interface CollapsedCollectionProps {
    collection: CardCollection;
    send: (type: string, message: any) => void;
    children?: React.ReactNode;
}

export default ({ collection: { name, cards }, send }: CollapsedCollectionProps) => {
    return (
        <>
            <Typography variant="body1" component="strong">
                <AutoAwesomeMotionIcon /><span />
                {name}
            </Typography>
            <List component="div" disablePadding>
                {map(
                    (card: Card) => (
                        <CollapsedCard key={card.uid} send={send} card={card} />
                    ),
                    cards
                )}
            </List>
        </>
    )
}
