import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { map } from "ramda"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import SpreadCard from "./SpreadCard"
import { Card } from "./state/Card"
import { CardCollection } from "./state/CardCollection"

interface CollapsedCollectionProps {
    collection: CardCollection
    actions: RoomActions
    children?: React.ReactNode
}

export default ({
    collection: { name, cards },
    actions,
}: CollapsedCollectionProps) => {
    return (
        <>
            <Typography variant="body1" component="strong">
                <AutoAwesomeMotionIcon />
                <span />
                {name}
            </Typography>
            <Grid container spacing={2}>
                {map(
                    (card: Card) => (
                        <Grid item xs={4} style={{
                            "minWidth": "4.1in"
                        }}>
                            <SpreadCard
                                key={card.uid}
                                actions={actions}
                                card={card}
                            />
                        </Grid>
                    ),
                    cards
                )}
                {(cards.length > 0) ? <React.Fragment /> : <em>No cards in this spread</em>}
            </Grid>
        </>
    )
}
