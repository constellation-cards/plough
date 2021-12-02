import React from "react"
import { map } from "ramda"
import { List, Typography } from "@mui/material"
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"

import { CardCollection } from "./state/CardCollection"
import { Card } from "./state/Card"
import CollapsedCard from "./CollapsedCard"
import { RoomActions } from "./ConstellationCardsGame"

interface CollapsedCollectionProps {
    collection: CardCollection;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({ collection: { name, cards }, actions }: CollapsedCollectionProps) => {
    return (
        <>
            <Typography variant="body1" component="strong">
                <AutoAwesomeMotionIcon /><span />
                {name}
            </Typography>
            <List component="div" disablePadding>
                {map(
                    (card: Card) => (
                        <CollapsedCard key={card.uid} actions={actions} card={card} />
                    ),
                    cards
                )}
            </List>
        </>
    )
}
