import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"
import Box from "@mui/material/Box"
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
        <Box sx={{m: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            p: 1,
                            backgroundColor: "primary.dark",
                        }}
                    >
                        <Typography variant="h6" sx={{
                            color: "white"
                        }}>{name}</Typography>
                    </Box>
                </Grid>
                {map(
                    (card: Card) => (
                        <Grid
                            item
                            xs={4}
                            style={{
                                minWidth: "4in",
                            }}
                            key={card.uid}
                        >
                            <SpreadCard
                                actions={actions}
                                card={card}
                            />
                        </Grid>
                    ),
                    cards
                )}
                {cards.length > 0 ? (
                    <React.Fragment />
                ) : (
                    <em>
                        No cards in this spread. Click "All Cards" to add cards
                        to it.
                    </em>
                )}
            </Grid>
        </Box>
    )
}
