import { Client, Room } from "colyseus.js"

const client = new Client(process.env.ROOM_URL)

export async function connect(setRoom: any, setGameState: any, setError: any): Promise<void> {
    try {
        const room = await client.joinOrCreate(process.env.ROOM_NAME)

        setRoom(room)

        // newState reference doesn't change, so we have to clone the object
        // for React to notice
        room.onStateChange(newState => {
            setGameState(Object.assign({}, newState))
        })

        room.onLeave(code => setRoom(null))
    } catch (e) {
        console.error(e)
        setError(e)
    }
}