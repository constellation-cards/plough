import { MapSchema } from "@colyseus/schema"
import { AppBar, Button, Drawer, Toolbar } from "@mui/material"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import { Room } from "colyseus.js"
import { ascend, map, partition, prop, sortWith } from "ramda"
import React, { useEffect, useState } from "react"

import { CardActionNames } from "../constants"
import { CreateCollectionAction, DeleteCollectionAction, FlipCardAction, MoveCardAction, RenameCollectionAction, UpsertCardAction } from "../room"
import CreateCollectionDialog from "./CreateCollectionDialog"
import PreviewCardModal from "./PreviewCardModal"
import Spread from "./Spread"
import Stacks from "./Stacks"
import { Card } from "./state/Card"
import { CardCollection } from "./state/CardCollection"
import { ConstellationCardsState } from "./state/ConstellationCardsState"

interface ConstellationCardsGameProps {
    room: Room
    children?: React.ReactNode
}

export interface RoomActions {
    moveCardAction: (card: Card, dest: CardCollection) => void
    discardCardAction: (card: Card) => void
    flipCardAction: (card: Card) => void
    createCollectionAction: (name: string, preset: string, expanded: boolean) => void
    deleteCollectionAction: (collection: CardCollection) => void
    renameCollectionAction: (collection: CardCollection, name: string) => void
    setActiveCollection: (activeCollection: CardCollection) => void
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    setPreviewCard: React.Dispatch<React.SetStateAction<Card>>
}

const createActions = (
    room: Room, setActiveCollection: (activeCollection: CardCollection) => void,
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setPreviewCard: React.Dispatch<React.SetStateAction<Card>>): RoomActions => ({
    moveCardAction: (card: Card, dest: CardCollection) => {
        const data: MoveCardAction = {
            cardUid: card.uid,
            dest: dest.uid,
        }
        room.send(CardActionNames.MOVE_CARD, data)
    },
    discardCardAction: (card: Card) => {
        const data: MoveCardAction = {
            cardUid: card.uid,
            dest: card.home,
        }
        room.send(CardActionNames.MOVE_CARD, data)
    },
    flipCardAction: (card: Card) => {
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
    deleteCollectionAction: (collection: CardCollection) => {
        const data: DeleteCollectionAction = {
            uid: collection.uid
        }
        room.send(CardActionNames.DELETE_COLLECTION, data)
    },
    renameCollectionAction: (collection: CardCollection, name: string) => {
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
    collections: MapSchema<CardCollection>
): [CardCollection[], CardCollection[]] => {
    const collectionValues = collections ? Array.from(collections.values()) : []
    // Hey Typescript, why do I have to force this type?
    const collectionArray = sortWith(
        sortWithRules,
        collectionValues
    ) as CardCollection[]
    return partition(
        (collection: CardCollection) => collection.expanded,
        collectionArray
    )
}

export default ({ room }: ConstellationCardsGameProps) => {
    const [gameState, setGameState] = useState<ConstellationCardsState>(null)
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const [previewCard, setPreviewCard] = useState<Card | null>(null)

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
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={'a'} href="https://constellation.cards/" target="_blank">
                        Constellation Cards
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={onCloseDrawer}>
                <Stacks
                    collections={stacks}
                    activeCollection={(activeCollection || spreads[0])}
                    actions={actions}
                />
            </Drawer>
            <Stack spacing={2}>
                {map(
                    (collection: CardCollection) => (
                        <Spread
                            key={collection.uid}
                            collection={collection}
                            actions={actions}
                        />
                    ),
                    spreads
                )}
                <CreateCollectionDialog
                    actions={actions}
                    createExpanded={true}
                />
                <PreviewCardModal
                    previewCard={previewCard}
                    setPreviewCard={setPreviewCard}
                />
            </Stack>
        </Container>
    )
}
