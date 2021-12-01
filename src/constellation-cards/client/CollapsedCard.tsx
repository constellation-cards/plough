import React, { useState } from "react"
import { map } from "ramda"

import { Card as CardState } from "./state/Card"
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Tooltip,
    Typography,
} from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

interface CollapsedCardProps {
    card: CardState
    children?: React.ReactNode
}

export default ({
    card: { name, flipped, front, back },
}: CollapsedCardProps) => {
    return (
        <ListItem button>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <Tooltip title="Deal this specific card">
            <IconButton
              edge="end"
              aria-label="deal"
            >
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    )
}
