const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// connection.ts (client-side)
import { Client } from "colyseus.js";
const client = new Client("ws://localhost:2567");

async function connect() {
  try {
    const room = await client.joinOrCreate("constellation-cards");

    room.onStateChange((newState) => {
      console.log("New state:", JSON.stringify(newState, null, 2));
    });

    room.onLeave((code) => {
      console.log("You've been disconnected.");
    });

    process.stdin.on("keypress", (str, key) => {
      if (key.ctrl && key.name === "c") {
        process.exit();
      } else {
        switch (key.name) {
          case "w":
              room.send("move", {x: 0, y: 1});
            break;
          case "a":
            room.send("move", {x: -1, y: 0});
            break;
          case "s":
            room.send("move", {x: 0, y: -1});
            break;
          case "d":
            room.send("move", {x: 1, y: 0});
            break;
        }
      }
    });
  } catch (e) {
    console.error("Couldn't connect:", e);
  }
}

connect().catch(console.error);
