import List from "@mui/material/List"
import { map } from "ramda"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import CollapsedCollection from "./Stack"
import { CardCollection } from "./state/CardCollection"

interface CollapsedCollectionListProps {
    collections: CardCollection[];
    activeCollection: CardCollection;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({collections, activeCollection: activeContainer, actions}: CollapsedCollectionListProps) => {
    return (
        <List>
            {map((collection: CardCollection) => <CollapsedCollection key={collection.uid} activeCollection={activeContainer} actions={actions} collection={collection} />, collections)}
        </List>
    )
}
