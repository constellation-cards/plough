// rooms/MyRoom.ts (server-side, room file)
import { Room } from "colyseus";

export class MyRoom extends Room {
    // number of clients per room
    // (colyseus will create the room instances for you)
    maxClients = 4;

    // room has been created: bring your own logic
    async onCreate(options: any) { }

    // client joined: bring your own logic
    async onJoin(client: any, options: any) { }

    // client left: bring your own logic
    async onLeave(client: any, consented: any) { }

    // room has been disposed: bring your own logic
    async onDispose() { }
}