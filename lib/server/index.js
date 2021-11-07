"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_1 = require("colyseus");
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const room_1 = require("../constellation-cards/room");
const port = Number(process.env.port) || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
const gameServer = new colyseus_1.Server({
    server: (0, http_1.createServer)(app),
});
gameServer.define("constellation-cards", room_1.ConstellationCardsRoom);
gameServer.listen(port);
console.log(`Listening on ws://localhost:${port}`);
