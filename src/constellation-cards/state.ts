import { Schema, ArraySchema, MapSchema, type } from "@colyseus/schema"

/**
 * A card has a name, a description, and a flipped state.
 * Cards naturally live in stacks.
 * Cards can be dealt onto spreads.
 */

export type Uid = string;

export class Card extends Schema {
    @type("string") uid: string = ""
    @type("string") name: string = ""
    @type("string") description: string = ""
    @type("boolean") flipped: boolean = false
    @type("string") home: Uid = ""
    @type("string") location: Uid = ""
}

export class CardCollection extends Schema {
    @type("string") uid: string = ""
    @type("string") name: string = ""
    @type("boolean") expanded: boolean = false

    @type([Card]) cards = new ArraySchema<Card>()
}

// Our custom game state, an ArraySchema of type Player only at the moment
export class ConstellationCardsState extends Schema {
    @type({map: Card}) cards = new MapSchema<Card>()
    @type({map: CardCollection}) collections = new MapSchema<CardCollection>()
}
