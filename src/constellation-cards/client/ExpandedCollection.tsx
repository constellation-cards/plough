import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"
import { List, Typography } from "@mui/material"
import { map } from "ramda"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import ExpandedCard from "./ExpandedCard"
import { Card } from "./state/Card"
import { CardCollection } from "./state/CardCollection"

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
                        <ExpandedCard key={card.uid} actions={actions} card={card} />
                    ),
                    cards
                )}
            </List>
        </>
    )
}
