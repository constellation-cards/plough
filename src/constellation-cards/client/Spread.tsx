import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Grid from "@mui/material/Grid"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { map } from "ramda"
import React, { useState } from "react"

import { RoomActions } from "./ConstellationCardsGame"
import SpreadCard from "./SpreadCard"
import { Card } from "./state/Card"
import { CardCollection } from "./state/CardCollection"

interface CollapsedCollectionProps {
    collection: CardCollection
    isActiveCollection: boolean
    actions: RoomActions
    children?: React.ReactNode
}

export default ({
    collection,
    isActiveCollection,
    actions,
}: CollapsedCollectionProps) => {
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleExpanded = (_event: any) => setIsExpanded(!isExpanded)

    const onClickMakeActive = (_event: any) => actions.setActiveCollection(collection)

    return (
        <Box sx={{ m: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid
                        container
                        xs={true}
                        sx={{
                            p: 1,
                            backgroundColor: "primary.dark",
                        }}
                    >
                        <Grid item xs={"auto"} sx={{"marginRight": 1}}>
                            <ButtonGroup variant="contained">
                                <Tooltip title="All future cards will be dealt to this spread">
                                    <Button
                                        variant="contained"
                                        aria-label="focus"
                                        startIcon={<AddCircleOutlineIcon />}
                                        onClick={onClickMakeActive}
                                        disabled={isActiveCollection}
                                    >
                                        Focus
                                    </Button>
                                </Tooltip>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={"auto"} onClick={toggleExpanded}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: isExpanded ? "white" : "gray",
                                }}
                            >
                                {collection.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {isExpanded
                    ? map(
                          (card: Card) => (
                              <Grid
                                  item
                                  xs={4}
                                  style={{
                                      minWidth: "4in",
                                  }}
                                  key={card.uid}
                              >
                                  <SpreadCard actions={actions} card={card} />
                              </Grid>
                          ),
                          collection.cards
                      )
                    : null}
                {collection.cards.length > 0 ? (
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
