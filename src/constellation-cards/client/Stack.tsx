import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { map } from "ramda"
import React, { useState } from "react"

import { RoomActions } from "./ConstellationCardsGame"
import CollapsedCard from "./StackCard"
import { Card } from "./state/Card"
import { CardCollection } from "./state/CardCollection"

interface CollapsedCollectionProps {
    collection: CardCollection;
    activeCollection: CardCollection;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({
    collection: { uid, name, cards },
    activeCollection,
    actions,
}: CollapsedCollectionProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = (_event: any) => setIsExpanded(!isExpanded)

    const onClickDealCard = (_event: any) => {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        actions.moveCardAction(randomCard, activeCollection)
    }

    return (
        <React.Fragment>
            <ListItem key={uid} onClick={toggleExpanded}>
                <Typography variant="body1" component="strong">
                    <AutoAwesomeMotionIcon />
                    <span />
                    {name}
                </Typography>
                <ListItemSecondaryAction>
                <Tooltip title="Deal this specific card">
                    <IconButton edge="end" aria-label="deal" onClick={onClickDealCard}>
                        <NavigateNextIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={isExpanded}>
                <List component="div" disablePadding>
                    {map(
                        (card: Card) => (
                            <CollapsedCard
                                key={card.uid}
                                activeCollection={activeCollection}
                                actions={actions}
                                card={card}
                            />
                        ),
                        cards
                    )}
                </List>
            </Collapse>
        </React.Fragment>
    )
}
