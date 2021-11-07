// index.ts (server-side, entrypoint)
import http from "http";
import { Server } from "colyseus";
import { ConstellationCardsRoom } from "../constellation-cards/room";

// create your game server
const gameServer = new Server({
    server: http.createServer()
});

// register your room handlers
gameServer.define('constellation-cards', ConstellationCardsRoom);

// make it available to receive connections
gameServer.listen(2567);
console.log(`Listening on ws://localhost:2567`)