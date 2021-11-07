"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstellationCardsRoom = void 0;
// rooms/MyRoom.ts (server-side, room file)
const colyseus_1 = require("colyseus");
const state_1 = require("./state");
class ConstellationCardsRoom extends colyseus_1.Room {
    // room has been created: bring your own logic
    onCreate(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState(new state_1.ConstellationCardsState());
            this.onMessage("new-stack", (client, data) => {
                const stack = new state_1.Stack();
                stack.name = data["name"];
                this.state.stacks.push(stack);
            });
            this.onMessage("new-spread", (client, data) => {
                const spread = new state_1.Spread();
                spread.name = data["name"];
                this.state.spreads.push(spread);
            });
            this.onMessage("add-card", (client, data) => {
                const spreadName = data["spread"];
                let spread;
                this.state.spreads.forEach((s) => {
                    if (s.name == spreadName) {
                        spread = spread || s;
                    }
                });
                if (spread) {
                    const card = new state_1.Card();
                    card.name = data["name"];
                    card.description = data["desc"];
                    card.flipped = false;
                    spread.cards.push(card);
                }
            });
            console.log("Room created");
        });
    }
    // client joined: bring your own logic
    onJoin(client, options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Room joined");
        });
    }
    // client left: bring your own logic
    onLeave(client, consented) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Room left");
        });
    }
    // room has been disposed: bring your own logic
    onDispose() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: persist game state to MongoDB
            console.log("Room disposed");
        });
    }
}
exports.ConstellationCardsRoom = ConstellationCardsRoom;
