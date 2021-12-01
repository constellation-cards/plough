import React, { useEffect, useState } from "react"
import { CardCollection } from "./state/CardCollection"
import { Card as CardComponent, Heading } from "rebass"
import { map } from "ramda"
import { Card } from "./state/Card"

interface CollapsedCollectionProps {
    collection: CardCollection
    children?: React.ReactNode
}

export default ({collection: {name, cards}}: CollapsedCollectionProps) => {
    return (
        <CardComponent>
            <Heading>{name}</Heading>
            <ul>
                {map((card: Card) => <li key={card.uid}>{card.name}</li>, cards)}
            </ul>
        </CardComponent>
    )
}
