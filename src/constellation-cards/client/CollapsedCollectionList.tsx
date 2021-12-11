import List from "@mui/material/List"
import { map } from "ramda"
import React from "react"

import CollapsedCollection from "./CollapsedCollection"
import { RoomActions } from "./ConstellationCardsGame"
import { CardCollection } from "./state/CardCollection"

interface CollapsedCollectionListProps {
    collections: CardCollection[];
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({actions, collections}: CollapsedCollectionListProps) => {
    return (
        <List>
            {map((collection: CardCollection) => <CollapsedCollection key={collection.uid} actions={actions} collection={collection} />, collections)}
        </List>
    )
}
