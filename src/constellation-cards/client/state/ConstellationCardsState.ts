// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.28
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Card } from './Card'
import { CardCollection } from './CardCollection'

export class ConstellationCardsState extends Schema {
    @type({ map: Card }) public cards: MapSchema<Card> = new MapSchema<Card>();
    @type({ map: CardCollection }) public collections: MapSchema<CardCollection> = new MapSchema<CardCollection>();
}
