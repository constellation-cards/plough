import { Client, Room } from "colyseus.js"

var webSocketUri = new URL('/', window.location.href);
webSocketUri.protocol = webSocketUri.protocol.replace('http', 'ws')

const client = new Client(webSocketUri.href)

export async function connect(roomName: string, gameId: string | undefined | null, setRoom: any, setError: any): Promise<void> {
    try {
        // Find a room to join
        var roomId: string = null
        var room: Room<any>

        if (gameId) {
            const rooms = await client.getAvailableRooms(roomName)
            rooms.forEach((room) => {
                if (room.metadata.gameId === gameId) {
                    roomId = room.roomId
                }
            });
        }

        if (roomId) {
            room = await client.joinById(roomId)
        } else {
            room = await client.create(roomName, { gameId })
        }

        setRoom(room)
        room.onLeave(_code => setRoom(null))
    } catch (e) {
        console.error(e)
        setError(e)
    }
}