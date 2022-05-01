import { Client } from "colyseus.js"

var webSocketUri = new URL('/', window.location.href);
webSocketUri.protocol = webSocketUri.protocol.replace('http', 'ws')

const client = new Client(webSocketUri.href)

export async function connect(roomName: string, setRoom: any, setError: any): Promise<void> {
    try {
        const room = await client.joinOrCreate(roomName)
        setRoom(room)
        room.onLeave(_code => setRoom(null))
    } catch (e) {
        console.error(e)
        setError(e)
    }
}