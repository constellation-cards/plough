import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import ClearIcon from "@mui/icons-material/Clear"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Grid from "@mui/material/Grid"
import Popover from "@mui/material/Popover"
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
    actions: RoomActions
    children?: React.ReactNode
}

export default ({
    collection,
    actions,
}: CollapsedCollectionProps) => {
    const [isExpanded, setIsExpanded] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    )

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    const toggleExpanded = (_event: any) => setIsExpanded(!isExpanded)

    const onClickAddCard = (_event: any) => {
        setAnchorEl(null)
        actions.setActiveCollection(collection)
        actions.setDrawerOpen(true)
    }

    const onClickDeleteSpread = (_event: any) => {
        if (confirm("Are you sure you want to delete this spread?")) {
            actions.deleteCollectionAction(collection)
        }
    }

    // TODO: re-add actions to toggle expansion

    return (
        <>
            <Box sx={{ m: 1, border: 2, boxShadow: "4px 4px" }}>
                <Box sx={{ textAlign: "center", width: "100%" }}>
                    <Typography
                        fontSize="h5.fontSize"
                        fontWeight="bold"
                        sx={{ background: "#ccc" }}
                        onClick={handleClick}
                    >
                        {collection.name}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
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
                                      <SpreadCard
                                          actions={actions}
                                          card={card}
                                      />
                                  </Grid>
                              ),
                              collection.cards
                          )
                        : null}
                    {collection.cards.length > 0 ? (
                        <React.Fragment />
                    ) : (
                        <Grid item xs={12}>
                            <em>
                                Click "{collection.name}" in the header,
                                then click "All Cards", to add cards.
                            </em>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                }}
            >
                <div>
                    <ButtonGroup variant="contained">
                        <Tooltip title="Deal a card to this spread">
                            <Button
                                variant="contained"
                                aria-label="deal"
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={onClickAddCard}
                            >
                                Add Card
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete this spread">
                            <Button
                                variant="contained"
                                aria-label="delete"
                                startIcon={<ClearIcon />}
                                onClick={onClickDeleteSpread}
                            >
                                Delete
                            </Button>
                        </Tooltip>
                    </ButtonGroup>
                </div>
            </Popover>
        </>
    )
}
