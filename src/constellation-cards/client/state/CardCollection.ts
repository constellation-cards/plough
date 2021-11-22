// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.28
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Card } from './Card'

export class CardCollection extends Schema {
    @type("string") public uid!: string;
    @type("string") public name!: string;
    @type("boolean") public expanded!: boolean;
    @type([ Card ]) public cards: ArraySchema<Card> = new ArraySchema<Card>();
}
