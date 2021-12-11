import ClearIcon from "@mui/icons-material/Clear"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from "@mui/material"
import React from "react"

import CardFace from "./CardFace"
import { RoomActions } from "./ConstellationCardsGame"
import { Card } from "./state/Card"

interface ExpandedCardProps {
    card: Card
    actions: RoomActions
    children?: React.ReactNode
}

/**
 * A card held in a container, showing both the actual card
 * and actions you can take (e.g. return to stack, flip)
 */
export default ({ card, actions }: ExpandedCardProps) => {
    const onClickDiscardCard = (event: any) =>
        actions.discardCardAction(card.uid, card.home)

    return (
        <React.Fragment key={card.uid}>
            <CardFace card={card} />
            <IconButton
                edge="end"
                aria-label="deal"
                onClick={onClickDiscardCard}
            >
                <ClearIcon />
            </IconButton>
        </React.Fragment>
    )
}
