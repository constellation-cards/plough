// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.28
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { PloughCard } from './PloughCard'
import { PloughCollection } from './PloughCollection'

export class PloughState extends Schema {
    @type({ map: PloughCard }) public cards: MapSchema<PloughCard> = new MapSchema<PloughCard>();
    @type({ map: PloughCollection }) public collections: MapSchema<PloughCollection> = new MapSchema<PloughCollection>();
}
