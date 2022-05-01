import { Server } from "colyseus"
import express, { Request, Response } from "express"
import { createServer } from "http"
import path from "path"

import { ConstellationCardsRoomName } from "../constellation-cards/constants"
import { ConstellationCardsRoom } from "../constellation-cards/room"

const port = Number(process.env.port) || 3000

const app = express()
app.use(express.json())
app.use(express.static("public"))

const serveStatic = (req: Request, res: Response) => {
    console.log(req.path)
    res.sendFile(path.join(path.resolve("public"), "index.html"))
}

app.get('/game', serveStatic)
app.get('/game/:gameId', serveStatic)

const gameServer = new Server({
    server: createServer(app),
})

gameServer.define(ConstellationCardsRoomName, ConstellationCardsRoom)

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)
