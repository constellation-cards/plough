import { Box, Modal, Stack } from "@mui/material"
import * as React from "react"

import CardFace from "./CardFace"
import { Card } from "./state/Card"

interface PreviewCardModalProps {
    previewCard: Card | null
    setPreviewCard: React.Dispatch<React.SetStateAction<Card>>
    children?: React.ReactNode
}

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //    width: "8.2in",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

export default function PreviewCardModal({
    previewCard,
    setPreviewCard,
}: PreviewCardModalProps) {
    const handleClose = () => setPreviewCard(null)

    return (
        <Modal
            open={previewCard != null}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack direction="row" spacing="1rem">
                    <CardFace
                        key={"front"}
                        card={previewCard}
                        isExpanded={true}
                        isFlipped={false}
                    />
                    <CardFace
                        key={"back"}
                        card={previewCard}
                        isExpanded={true}
                        isFlipped={true}
                    />
                </Stack>
            </Box>
        </Modal>
    )
}
