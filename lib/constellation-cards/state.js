"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstellationCardsState = exports.Spread = exports.Stack = exports.Card = void 0;
const schema_1 = require("@colyseus/schema");
/**
 * A card has a name, a description, and a flipped state.
 * Cards naturally live in stacks.
 * Cards can be dealt onto spreads.
 */
class Card extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.name = "";
        this.description = "";
        this.flipped = false;
        // TODO: how do we reference the stack we came from?
    }
}
__decorate([
    (0, schema_1.type)("string")
], Card.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], Card.prototype, "description", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Card.prototype, "flipped", void 0);
exports.Card = Card;
class Stack extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.name = "";
        this.cards = new schema_1.ArraySchema();
    }
}
__decorate([
    (0, schema_1.type)("string")
], Stack.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)([Card])
], Stack.prototype, "cards", void 0);
exports.Stack = Stack;
class Spread extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.name = "";
        this.cards = new schema_1.ArraySchema();
    }
}
__decorate([
    (0, schema_1.type)("string")
], Spread.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)([Card])
], Spread.prototype, "cards", void 0);
exports.Spread = Spread;
// Our custom game state, an ArraySchema of type Player only at the moment
class ConstellationCardsState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.stacks = new schema_1.ArraySchema();
        this.spreads = new schema_1.ArraySchema();
    }
}
__decorate([
    (0, schema_1.type)([Stack])
], ConstellationCardsState.prototype, "stacks", void 0);
__decorate([
    (0, schema_1.type)([Spread])
], ConstellationCardsState.prototype, "spreads", void 0);
exports.ConstellationCardsState = ConstellationCardsState;
