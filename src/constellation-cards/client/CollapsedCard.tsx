import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from "@mui/material"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import { Card as CardState } from "./state/Card"

interface CollapsedCardProps {
    card: CardState;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({
    card: { uid, name }, actions
}: CollapsedCardProps) => {
    const onClickMoveCard = (event: any) => actions.moveCardAction(uid, "default")

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
