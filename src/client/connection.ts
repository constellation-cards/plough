import { Client, Room } from "colyseus.js"

const client = new Client(process.env.ROOM_URL)

export async function connect(setRoom: any, setError: any): Promise<void> {
    try {
        const room = await client.joinOrCreate(process.env.ROOM_NAME)
        setRoom(room)
        room.onLeave(code => setRoom(null))
    } catch (e) {
        console.error(e)
        setError(e)
    }
}