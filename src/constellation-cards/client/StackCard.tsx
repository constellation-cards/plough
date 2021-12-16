import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from "@mui/material"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import { Card as CardState } from "./state/Card"
import { CardCollection } from "./state/CardCollection"

interface CollapsedCardProps {
    card: CardState;
    activeCollection: CardCollection;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({
    card, activeCollection, actions
}: CollapsedCardProps) => {
    const onClickPickCard = (_event: any) => actions.moveCardAction(card, activeCollection)

    return (
        <ListItem button>
            <ListItemText inset primary={card.name} />
            <ListItemSecondaryAction>
                <Tooltip title="Deal this specific card">
                    <IconButton edge="end" aria-label="deal" onClick={onClickPickCard}>
                        <NavigateNextIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
