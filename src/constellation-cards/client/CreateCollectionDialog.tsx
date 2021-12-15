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
    const [open, setOpen] = useState(false)
    const [collectionName, setCollectionName] = useState("")

    const onClickOpen = (_event: any) => setOpen(true)
    const onClickClose = (_event: any) => setOpen(false)
    const onChangeUpdate = (event: any) => setCollectionName(event.target.value)

    const onClickCreate = (_event: any) => {
        actions.createCollectionAction(collectionName, createExpanded)
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" onClick={onClickOpen}>
                Create Spread
            </Button>
            <Dialog open={open} onClose={onClickClose}>
                <DialogTitle>Create Stack or Spread</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter a name for the new stack or spread
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Stack or Spread Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={onChangeUpdate}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickClose}>Cancel</Button>
                    <Button disabled={isEmpty(collectionName)} onClick={onClickCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
