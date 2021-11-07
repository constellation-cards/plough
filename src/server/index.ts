import { Server } from "colyseus"
import { createServer } from "http"
import express from "express"

import { ConstellationCardsRoom } from "../constellation-cards/room"

const port = Number(process.env.port) || 3000

const app = express()
app.use(express.json())
app.use(express.static("public"))

const gameServer = new Server({
    server: createServer(app),
})

gameServer.define("constellation-cards", ConstellationCardsRoom)

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)
