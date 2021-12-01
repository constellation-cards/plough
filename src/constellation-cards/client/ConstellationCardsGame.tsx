import React, { useEffect, useState } from "react"
import { Room } from "colyseus.js"
import { CardCollection } from "./state/CardCollection"
import { ConstellationCardsState } from "./state/ConstellationCardsState"
import { Box, Flex } from "rebass"
import { ascend, map, partition, prop, sortWith } from "ramda"
import { MapSchema } from "@colyseus/schema"
import CollapsedCollection from "./CollapsedCollection"

interface ConstellationCardsGameProps {
    room: Room
    children?: React.ReactNode
}

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

    return (
        <Flex>
            <Box width={1/3}>
                {map((collection: CardCollection) => <CollapsedCollection key={collection.uid} collection={collection} />, collapsed)}
            </Box>
            <Box width={2/3}>
                <pre>
                    {JSON.stringify(collapsed, null, 2)}
                </pre>
            </Box>
        </Flex>
    )
}
