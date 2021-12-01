import React, { useState } from "react"
import { map } from "ramda"

import { Card } from "./state/Card"
import { Box, Button, Flex, Text } from "rebass"

interface CollapsedCardProps {
    card: Card
    children?: React.ReactNode
}

export default ({card}: CollapsedCardProps) => {
    return (
        <Flex
            px={2}
            alignItems="center"
        >
            <Text p={2} fontWeight='bold'>{card.name}</Text>
            <Box mx='auto' />
            <Button variant='picker' href='#!'>Pick</Button>
        </Flex>
    )
}
