import Button from "@mui/material/Button"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import { presets } from "../default-state"
import { map } from "ramda"
import Tooltip from "@mui/material/Tooltip"

interface CreateCollectionDialogProps {
    actions: RoomActions
    createExpanded: boolean
    children?: React.ReactNode
}

export default ({ actions, createExpanded }: CreateCollectionDialogProps) => {
    const onClickCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const collectionName = prompt("Enter a name for this spread")
        if (collectionName) {
            actions.createCollectionAction(collectionName, event.currentTarget.getAttribute("data-preset-name"), createExpanded)
        }
    }

    return (
        <div>
            {map(
                (preset) => (
                    <Tooltip title={preset.description}>
                        <Button
                            data-preset-name={preset.name}
                            variant="outlined"
                            aria-label={preset.name}
                            onClick={onClickCreate}
                        >
                            {preset.name}
                        </Button>
                    </Tooltip>
                ),
                presets
            )}
        </div>
    )
}
