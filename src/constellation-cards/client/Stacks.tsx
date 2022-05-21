import { List } from "@mui/material"
import { map } from "ramda"
import React from "react"

import { RoomActions } from "./ConstellationCardsGame"
import Stack from "./Stack"
import { PloughCollection } from "./state/PloughCollection"

interface CollapsedCollectionListProps {
    collections: PloughCollection[];
    activeCollection: PloughCollection;
    actions: RoomActions;
    children?: React.ReactNode;
}

export default ({collections, activeCollection: activeContainer, actions}: CollapsedCollectionListProps) => {
    return (
        <List sx={{ bgcolor: 'background.paper' }}>
            {map((collection: PloughCollection) => <Stack key={collection.uid} activeCollection={activeContainer} actions={actions} collection={collection} />, collections)}
        </List>
    )
}
