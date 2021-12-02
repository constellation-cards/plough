import React, { useEffect, useState } from "react"
import { Room } from "colyseus.js"
import { ascend, map, partition, prop, sortWith } from "ramda"
import { MapSchema } from "@colyseus/schema"

import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

import { CardCollection } from "./state/CardCollection"
import { ConstellationCardsState } from "./state/ConstellationCardsState"
import CollapsedCollection from "./CollapsedCollection"
import ExpandedCollection from "./ExpandedCollection"

interface ConstellationCardsGameProps {
    room: Room
    children?: React.ReactNode
}

export interface RoomActions {
    moveCardAction: (cardUid: string, dest: string) => void;
}

const createActions = (room: Room): RoomActions => ({
    moveCardAction: (cardUid: string, dest: string) => room.send("move-card", {cardUid, dest})
})

const sortWithRules = [
    ascend(prop('name'))
]

const gameCollectionList = (collections: MapSchema<CardCollection>) => {
    const collectionValues = collections ? Array.from(collections.values()) : []
    const collectionArray = sortWith(sortWithRules, collectionValues)
    return partition((collection: CardCollection) => collection.expanded, collectionArray)
}

export default (props: ConstellationCardsGameProps) => {
    const [gameState, setGameState] = useState<ConstellationCardsState>(null)

    useEffect(() => {
        console.log("Registering onStateChange event with room")
        props.room.onStateChange((newState) => {
            setGameState(Object.assign({}, newState))
        })
    }, [props.room])

    const [expanded, collapsed] = gameCollectionList(gameState?.collections)

    const actions = createActions(props.room)

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Stack spacing={2}>
                    {map((collection: CardCollection) => <CollapsedCollection key={collection.uid} actions={actions} collection={collection} />, collapsed)}
                </Stack>
            </Grid>
            <Grid item xs={8}>
            <Stack spacing={2}>
                    {map((collection: CardCollection) => <ExpandedCollection key={collection.uid} actions={actions} collection={collection} />, expanded)}
                </Stack>
            </Grid>
        </Grid>
    )
}
