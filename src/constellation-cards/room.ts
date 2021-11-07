// rooms/MyRoom.ts (server-side, room file)
import { Room } from "colyseus";
import { Player, State } from "./state";

export class ConstellationCardsRoom extends Room<State> {
    // room has been created: bring your own logic
    async onCreate(options: any) {
        this.setState(new State());

        this.onMessage("move", (client, data) => {
            const player = this.state.players.get(client.sessionId);
            player.x += data.x;
            player.y += data.y;
            console.log(client.sessionId + " at, x: " + player.x, "y: " + player.y);
        });

        console.log("Room created");
    }

    // client joined: bring your own logic
    async onJoin(client: any, options: any) {
        this.state.players.set(client.sessionId, new Player());
        console.log("Room joined");
    }

    // client left: bring your own logic
    async onLeave(client: any, consented: any) {
        console.log("Room left");
    }

    // room has been disposed: bring your own logic
    async onDispose() {
        // TODO: persist game state to MongoDB
        console.log("Room disposed");
    }
}