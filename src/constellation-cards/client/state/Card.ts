// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.28
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { CardFace } from './CardFace'

export class Card extends Schema {
    @type("string") public uid!: string;
    @type("string") public name!: string;
    @type("boolean") public flipped!: boolean;
    @type("string") public home!: string;
    @type("string") public location!: string;
    @type(CardFace) public front: CardFace = new CardFace();
    @type(CardFace) public back: CardFace = new CardFace();
}
