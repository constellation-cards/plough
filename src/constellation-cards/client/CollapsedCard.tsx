import React, { useState } from "react"

import { Card as CardState } from "./state/Card"
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

interface CollapsedCardProps {
    card: CardState;
    send: (type: string, message: any) => void;
    children?: React.ReactNode;
}

export default ({
    card: { uid, name, flipped, front, back }, send
}: CollapsedCardProps) => {
    const onClickMoveCard = (event: any) => {
        send("move-card", {
            cardUid: uid,
            dest: "default"
        })
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
