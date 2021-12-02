import React, { useState } from "react"
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Tooltip,
    Typography,
} from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

import { Card as CardState } from "./state/Card"
import { RoomActions } from "./ConstellationCardsGame"

interface CollapsedCardProps {
    card: CardState;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({
    card: { uid, name, flipped, front, back }, actions
}: CollapsedCardProps) => {
    const onClickMoveCard = (event: any) => {
        actions.moveCardAction(uid, "default")
    }

    return (
        <ListItem button>   
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
                <Tooltip title="Deal this specific card">
                    <IconButton edge="end" aria-label="deal" onClick={onClickMoveCard}>
                        <NavigateNextIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
