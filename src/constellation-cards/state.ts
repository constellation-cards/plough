import { ArraySchema, MapSchema, Schema, type } from "@colyseus/schema"

/**
 * A card has a name, a description, and a flipped state.
 * Cards naturally live in stacks.
 * Cards can be dealt onto spreads.
 */

export type Uid = string;

export class PloughCardFace extends Schema {
    @type("string") name: string = ""
    @type("string") description: string = ""
}

export class PloughCard extends Schema {
    @type("string") uid: string = ""
    // The card name is either "Front Name / Back Name" or "Front Name" if both are the same
    @type("string") name: string = ""
    @type("boolean") flipped: boolean = false
    @type("string") home: Uid = ""
    @type("string") location: Uid = ""
    @type(PloughCardFace) front: PloughCardFace
    @type(PloughCardFace) back: PloughCardFace
}

export class PloughCollection extends Schema {
    @type("string") uid: string = ""
    @type("string") name: string = ""
    @type("boolean") expanded: boolean = false

    @type([PloughCard]) cards = new ArraySchema<PloughCard>()
}

// Our custom game state, an ArraySchema of type Player only at the moment
export class PloughState extends Schema {
    @type({map: PloughCard}) cards = new MapSchema<PloughCard>()
    @type({map: PloughCollection}) collections = new MapSchema<PloughCollection>()
}
