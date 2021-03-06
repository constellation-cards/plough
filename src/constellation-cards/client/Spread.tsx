import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import ClearIcon from "@mui/icons-material/Clear"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Box, Button, ButtonGroup, Grid, Popover, Tooltip, Typography } from "@mui/material"
import { map } from "ramda"
import React, { useState } from "react"

import { RoomActions } from "./ConstellationCardsGame"
import SpreadCard from "./SpreadCard"
import { PloughCard } from "./state/PloughCard"
import { PloughCollection } from "./state/PloughCollection"

interface CollapsedCollectionProps {
    collection: PloughCollection
    actions: RoomActions
    children?: React.ReactNode
}

export default ({ collection, actions }: CollapsedCollectionProps) => {
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

    const onClickToggleExpanded = (_event: any) => setIsExpanded(!isExpanded)

    const onClickAddCard = (_event: any) => {
        setAnchorEl(null)
        actions.setActiveCollection(collection)
        actions.setDrawerOpen(true)
    }

    const onClickRenameSpread = (_event: any) => {
        setAnchorEl(null)
        const newName = prompt("Enter a new name for this spread", collection.name)
        if (newName) {
            actions.renameCollectionAction(collection, newName)
        }
    }

    const onClickDeleteSpread = (_event: any) => {
        setAnchorEl(null)
        if (confirm(`Are you sure you want to delete '${collection.name}'?`)) {
            actions.deleteCollectionAction(collection)
        }
    }

    return (
        <>
            <Box sx={{ m: 1, border: 2, boxShadow: "4px 4px" }}>
                <Box sx={{ textAlign: "center", width: "100%", cursor: "pointer" }}>
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
                    {map(
                        (card: PloughCard) => (
                            <Grid
                                item
                                xs={4}
                                style={{
                                    minWidth: "4in",
                                }}
                                key={card.uid}
                            >
                                <SpreadCard
                                    card={card}
                                    isExpanded={isExpanded}
                                    actions={actions}
                                />
                            </Grid>
                        ),
                        collection.cards
                    )}
                    {collection.cards.length > 0 ? (
                        <React.Fragment />
                    ) : (
                        <Grid item xs={12}>
                            <em>
                                Click "{collection.name}" in the header, then
                                click "All Cards", to add cards.
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
                        <Tooltip title="Expand or collapse this spread">
                            <Button
                                variant="contained"
                                aria-label="expand-collapse"
                                startIcon={
                                    isExpanded ? (
                                        <ArrowDropDownIcon />
                                    ) : (
                                        <ArrowRightIcon />
                                    )
                                }
                                onClick={onClickToggleExpanded}
                            >
                                {isExpanded ? "Collapse" : "Expand"}
                            </Button>
                        </Tooltip>
                        <Tooltip title="Rename this spread">
                            <Button
                                variant="contained"
                                aria-label="rename"
                                startIcon={<DriveFileRenameOutlineIcon />}
                                onClick={onClickRenameSpread}
                            >
                                Rename
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
