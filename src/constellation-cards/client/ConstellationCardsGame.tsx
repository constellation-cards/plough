import { MapSchema } from "@colyseus/schema"
import { Container, Drawer, Stack } from "@mui/material"
import { Room } from "colyseus.js"
import { ascend, map, partition, prop, sortWith } from "ramda"
import React, { useEffect, useState } from "react"

import { CardActionNames } from "../constants"
import { CreateCollectionAction, DeleteCollectionAction, FlipCardAction, MoveCardAction, RenameCollectionAction, UpsertCardAction } from "../room"
import ConstellationCardsAppbar from "./ConstellationCardsAppbar"
import PreviewCardModal from "./PreviewCardModal"
import Spread from "./Spread"
import Stacks from "./Stacks"
import { PloughCard } from "./state/PloughCard"
import { PloughCollection } from "./state/PloughCollection"
import { PloughState } from "./state/PloughState"

interface ConstellationCardsGameProps {
    room: Room
    children?: React.ReactNode
}

export interface RoomActions {
    moveCardAction: (card: PloughCard, dest: PloughCollection) => void
    discardCardAction: (card: PloughCard) => void
    flipCardAction: (card: PloughCard) => void
    createCollectionAction: (name: string, preset: string, expanded: boolean) => void
    deleteCollectionAction: (collection: PloughCollection) => void
    renameCollectionAction: (collection: PloughCollection, name: string) => void
    setActiveCollection: (activeCollection: PloughCollection) => void
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    setPreviewCard: React.Dispatch<React.SetStateAction<PloughCard>>
}

const createActions = (
    room: Room, setActiveCollection: (activeCollection: PloughCollection) => void,
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setPreviewCard: React.Dispatch<React.SetStateAction<PloughCard>>): RoomActions => ({
    moveCardAction: (card: PloughCard, dest: PloughCollection) => {
        const data: MoveCardAction = {
            cardUid: card.uid,
            dest: dest.uid,
        }
        room.send(CardActionNames.MOVE_CARD, data)
    },
    discardCardAction: (card: PloughCard) => {
        const data: MoveCardAction = {
            cardUid: card.uid,
            dest: card.home,
        }
        room.send(CardActionNames.MOVE_CARD, data)
    },
    flipCardAction: (card: PloughCard) => {
        const data: FlipCardAction = {
            cardUid: card.uid,
        }
        room.send(CardActionNames.FLIP_CARD, data)
    },
    createCollectionAction: (name: string, preset: string = "", expanded: boolean) => {
        const data: CreateCollectionAction = {
            name,
            preset,
            expanded,
        }
        room.send(CardActionNames.CREATE_COLLECTION, data)
    },
    deleteCollectionAction: (collection: PloughCollection) => {
        const data: DeleteCollectionAction = {
            uid: collection.uid
        }
        room.send(CardActionNames.DELETE_COLLECTION, data)
    },
    renameCollectionAction: (collection: PloughCollection, name: string) => {
        const data: RenameCollectionAction = {
            uid: collection.uid,
            name
        }
        room.send(CardActionNames.RENAME_COLLECTION, data)
    },
    setActiveCollection,
    setDrawerOpen,
    setPreviewCard
})

const sortWithRules = [ascend(prop("name"))]

const gameCollectionList = (
    collections: MapSchema<PloughCollection>
): [PloughCollection[], PloughCollection[]] => {
    const collectionValues = collections ? Array.from(collections.values()) : []
    // Hey Typescript, why do I have to force this type?
    const collectionArray = sortWith(
        sortWithRules,
        collectionValues
    ) as PloughCollection[]
    return partition(
        (collection: PloughCollection) => collection.expanded,
        collectionArray
    )
}

export default ({ room }: ConstellationCardsGameProps) => {
    const [gameState, setGameState] = useState<PloughState>(null)
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const [previewCard, setPreviewCard] = useState<PloughCard | null>(null)

    useEffect(() => {
        console.log("Registering onStateChange event with room")
        room.onStateChange((newState) => {
            setGameState(Object.assign({}, newState))
        })

        // TODO: send a toast
        room.onMessage("announcement", (message: any) => console.log(message))
    }, [room])

    const [spreads, stacks] = gameCollectionList(gameState?.collections)

    const [activeCollection, setActiveCollection] = useState(spreads[0])

    const onCloseDrawer = (_event: any) => setDrawerOpen(false)

    const actions = createActions(room, setActiveCollection, setDrawerOpen, setPreviewCard)

    return (
        <Container maxWidth="xl" disableGutters={false} >
            <ConstellationCardsAppbar actions={actions} />
            <Drawer anchor="left" open={isDrawerOpen} onClose={onCloseDrawer}>
                <Stacks
                    collections={stacks}
                    activeCollection={(activeCollection || spreads[0])}
                    actions={actions}
                />
            </Drawer>
            <Stack spacing={2}>
                {map(
                    (collection: PloughCollection) => (
                        <Spread
                            key={collection.uid}
                            collection={collection}
                            actions={actions}
                        />
                    ),
                    spreads
                )}
                <PreviewCardModal
                    previewCard={previewCard}
                    setPreviewCard={setPreviewCard}
                />
            </Stack>
        </Container>
    )
}
