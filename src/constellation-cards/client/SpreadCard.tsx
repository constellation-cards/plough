import AutorenewIcon from '@mui/icons-material/Autorenew';
import ClearIcon from "@mui/icons-material/Clear"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
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
    const onClickDiscardCard = (_event: any) => actions.discardCardAction(card)
    const onClickFlipCard = (_event: any) => actions.flipCardAction(card)

    return (
        <React.Fragment key={card.uid}>
            <Grid>
                <Grid item xs={12}>
                    <CardFace card={card} />
                </Grid>
                <Grid item xs={4}>
                    <IconButton
                        edge="end"
                        aria-label="deal"
                        onClick={onClickDiscardCard}
                    >
                        <ClearIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <IconButton
                        edge="end"
                        aria-label="deal"
                        onClick={onClickFlipCard}
                    >
                        <AutorenewIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
