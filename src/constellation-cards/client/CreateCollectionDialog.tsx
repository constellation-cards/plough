import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import { isEmpty } from "ramda"
import React, { useState } from "react"

import { RoomActions } from "./ConstellationCardsGame"

interface CreateCollectionDialogProps {
    actions: RoomActions;
    createExpanded: boolean;
    children?: React.ReactNode;
}

export default ({ actions, createExpanded }: CreateCollectionDialogProps) => {
    const onClickCreate = (_event: any) => {
        const collectionName = prompt("Enter a name for this spread")
        if (collectionName) {
            actions.createCollectionAction(collectionName, createExpanded)
        }
    }

    return (
        <div>
            <Button variant="outlined" onClick={onClickCreate}>
                Create Spread
            </Button>
        </div>
    )
}
