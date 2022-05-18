import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { Collapse, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Tooltip } from "@mui/material"
import { map } from "ramda"
import React, { useState } from "react"

import { RoomActions } from "./ConstellationCardsGame"
import StackCard from "./StackCard"
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
                <ListItemIcon>
                    {isExpanded? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                </ListItemIcon>
                <ListItemText primary={name} />
                <ListItemSecondaryAction>
                <Tooltip title="Deal a random card from this stack" placement="right">
                    <IconButton disabled={cards.length === 0} edge="end" aria-label="deal" onClick={onClickDealCard}>
                        <NavigateNextIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={isExpanded}>
                <List component="div" disablePadding>
                    {map(
                        (card: Card) => (
                            <StackCard
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
