import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from "@mui/material"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import { PloughCard } from "./state/PloughCard"
import { PloughCollection } from "./state/PloughCollection"

interface CollapsedCardProps {
    card: PloughCard;
    activeCollection: PloughCollection;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({
    card, activeCollection, actions
}: CollapsedCardProps) => {
    const onClickPreview = (_event: any) => actions.setPreviewCard(card)
    const onClickPickCard = (_event: any) => actions.moveCardAction(card, activeCollection)

    return (
        <ListItem button onClick={onClickPreview}>
            <ListItemText inset primary={card.name} />
            <ListItemSecondaryAction>
                <Tooltip title="Deal this specific card" placement="right">
                    <IconButton edge="end" aria-label="deal" onClick={onClickPickCard}>
                        <NavigateNextIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
