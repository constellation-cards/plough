import { MapSchema } from "@colyseus/schema"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { Room } from "colyseus.js"
import { ascend, map, partition, prop, sortWith } from "ramda"
import React, { useEffect, useState } from "react"

import { CardActionNames } from "../constants"
import { CreateCollectionAction, DeleteCollectionAction, FlipCardAction, MoveCardAction, UpsertCardAction } from "../room"
import CreateCollectionDialog from "./CreateCollectionDialog"
import ExpandedCollection from "./Spread"
import CollapsedCollectionList from "./Stacks"
import { Card } from "./state/Card"
import { CardCollection } from "./state/CardCollection"
import { ConstellationCardsState } from "./state/ConstellationCardsState"

interface ConstellationCardsGameProps {
    room: Room
    children?: React.ReactNode
}

export interface RoomActions {
    moveCardAction: (card: Card, dest: CardCollection) => void;
    discardCardAction: (card: Card) => void;
    flipCardAction: (card: Card) => void;
    createCollectionAction: (name: string, expanded: boolean) => void;
}

const createActions = (room: Room): RoomActions => ({
    moveCardAction: (card: Card, dest: CardCollection) => {
        const data: MoveCardAction = {
            cardUid: card.uid,
            dest: dest.uid
        }
        room.send(CardActionNames.MOVE_CARD, data)
    },
    discardCardAction: (card: Card) => {
        const data: MoveCardAction = {
            cardUid: card.uid,
            dest: card.home
        }
        room.send(CardActionNames.MOVE_CARD, data)
    },
    flipCardAction: (card: Card) => {
        const data: FlipCardAction = {
            cardUid: card.uid
        }
        room.send(CardActionNames.FLIP_CARD, data)
    },
    createCollectionAction:  (name: string, expanded: boolean) => {
        const data: CreateCollectionAction = {
            name,
            expanded
        }
        room.send(CardActionNames.CREATE_COLLECTION, data)
    }
})

const sortWithRules = [
    ascend(prop('name'))
]

const gameCollectionList = (collections: MapSchema<CardCollection>): [CardCollection[], CardCollection[]] => {
    const collectionValues = collections ? Array.from(collections.values()) : []
    // Hey Typescript, why do I have to force this type?
    const collectionArray = sortWith(sortWithRules, collectionValues) as CardCollection[]
    return partition((collection: CardCollection) => collection.expanded, collectionArray)
}

export default ({room}: ConstellationCardsGameProps) => {
    const [gameState, setGameState] = useState<ConstellationCardsState>(null)

    useEffect(() => {
        console.log("Registering onStateChange event with room")
        room.onStateChange((newState) => {
            setGameState(Object.assign({}, newState))
        })
    }, [room])

    const [spreads, stacks] = gameCollectionList(gameState?.collections)

    const actions = createActions(room)

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CollapsedCollectionList collections={stacks} activeCollection={spreads[0]} actions={actions} />
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2}>
                    {map((collection: CardCollection) => <ExpandedCollection key={collection.uid} actions={actions} collection={collection} />, spreads)}
                    <CreateCollectionDialog actions={actions} createExpanded={true} />
                </Stack>
            </Grid>
        </Grid>
    )
}
