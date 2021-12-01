import React, { useEffect, useState } from "react"
import { Card as CardComponent, Heading } from "rebass"
import { map } from "ramda"
import { CardCollection } from "./state/CardCollection"
import { Card } from "./state/Card"
import CollapsedCard from "./CollapsedCard"

interface CollapsedCollectionProps {
    collection: CardCollection
    children?: React.ReactNode
}

export default ({collection: {name, cards}}: CollapsedCollectionProps) => {
    return (
        <CardComponent>
            <Heading>{name}</Heading>
            {map((card: Card) => <CollapsedCard key={card.uid} card={card} />, cards)}
        </CardComponent>
    )
}
