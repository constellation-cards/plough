import { Client, Room } from "colyseus.js"

var webSocketUri = new URL('/', window.location.href);
webSocketUri.protocol = webSocketUri.protocol.replace('http', 'ws')

const client = new Client(webSocketUri.href)

export async function connect(roomName: string, gameId: string | undefined | null, setRoom: any, setError: any): Promise<string> {
    try {
        // Find a room to join
        var roomId: string = null
        var room: Room<any>

        if (gameId) {
            const rooms = await client.getAvailableRooms(roomName)
            rooms.forEach((candidate) => {
                if (candidate.metadata.gameId === gameId) {
                    roomId = candidate.roomId
                }
            });
        }

        if (roomId) {
            room = await client.joinById(roomId)
        } else {
            room = await client.create(roomName, { gameId })
        }

        setRoom(room)
        setError(null)
        room.onLeave(_code => setRoom(null))

        if (!gameId) {
            const rooms = await client.getAvailableRooms(roomName)
            rooms.forEach((candidate) => {
                if (candidate.roomId === room.id) {
                    gameId = candidate.metadata.gameId
                }
            });
        }

        return gameId
    } catch (e) {
        console.error(e)
        setError(e)
        return null
    }
}