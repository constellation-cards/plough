// rooms/MyRoom.ts (server-side, room file)
import { Room } from "colyseus";
import { ConstellationCardsState, Stack, Spread, Card } from "./state";

export class ConstellationCardsRoom extends Room<ConstellationCardsState> {
    // room has been created: bring your own logic
    async onCreate(options: any) {
        this.setState(new ConstellationCardsState());

        this.onMessage("new-stack", (client, data) => {
            const stack = new Stack();
            stack.name = data["name"];
            this.state.stacks.push(stack);
        });

        this.onMessage("new-spread", (client, data) => {
            const spread = new Spread();
            spread.name = data["name"];
            this.state.spreads.push(spread);
        });

        this.onMessage("add-card", (client, data) => {
            const spreadName = data["spread"];
            let spread: Spread;
            this.state.spreads.forEach((s: Spread) => {
                if (s.name == spreadName) {
                    spread = spread || s;
                }
            })
            if (spread) {
                const card = new Card();
                card.name = data["name"];
                card.description = data["desc"];
                card.flipped = false;
                spread.cards.push(card);
            }
        });

        console.log("Room created");
    }

    // client joined: bring your own logic
    async onJoin(client: any, options: any) {
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