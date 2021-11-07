import { Schema, ArraySchema, MapSchema, type } from "@colyseus/schema";

/**
 * A card has a name, a description, and a flipped state.
 * Cards naturally live in stacks.
 * Cards can be dealt onto spreads.
 */
export class Card extends Schema {
  @type("string") name: string = "";
  @type("string") description: string = "";
  @type("boolean") flipped: boolean = false;
  // TODO: how do we reference the stack we came from?
}

export class Stack extends Schema {
  @type("string") name: string = "";
  @type([ Card ]) cards = new ArraySchema<Card>();
}

export class Spread extends Schema {
  @type("string") name: string = "";
  @type([ Card ]) cards = new ArraySchema<Card>();
}

// Our custom game state, an ArraySchema of type Player only at the moment
export class ConstellationCardsState extends Schema {
  @type([ Stack ]) stacks = new ArraySchema<Stack>();
  @type([ Spread ]) spreads = new ArraySchema<Spread>();
}