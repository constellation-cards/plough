import AutorenewIcon from "@mui/icons-material/Autorenew"
import ClearIcon from "@mui/icons-material/Clear"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Tooltip from "@mui/material/Tooltip"
import React from "react"
import ReactCardFlip from "react-card-flip"

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

    const CardActionButtonGroup = (
        <div>
            <ButtonGroup variant="contained">
                <Tooltip title="Return this card to its home stack">
                    <Button
                        variant="contained"
                        aria-label="discard"
                        startIcon={<ClearIcon />}
                        onClick={onClickDiscardCard}
                    >
                        Discard
                    </Button>
                </Tooltip>
                <Tooltip title="Flip this card">
                    <Button
                        variant="contained"
                        aria-label="flip"
                        startIcon={<AutorenewIcon />}
                        onClick={onClickFlipCard}
                    >
                        Flip
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </div>
    )

    return (
        <ReactCardFlip
            key={card.uid}
            isFlipped={card.flipped}
            flipDirection="horizontal"
        >
            <CardFace key={"front"} card={card} isFlipped={false}>
                {CardActionButtonGroup}
            </CardFace>
            <CardFace key={"back"} card={card} isFlipped={true}>
                {CardActionButtonGroup}
            </CardFace>
        </ReactCardFlip>
    )
}
