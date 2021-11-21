import { ColyseusTestServer, boot } from "@colyseus/testing";

import appConfig from "../arena.config"

describe("room", () => {
    let colyseus: ColyseusTestServer;

    beforeAll(async () => colyseus = await boot(appConfig));
    afterAll(async () => await colyseus.shutdown());
  
    beforeEach(async () => await colyseus.cleanup());

    describe("onCreate", () => {
        const options: any = {}

        it("is initialized with a valid state", async () => {
            const room = await colyseus.createRoom("constellation-cards")
            const client1 = await colyseus.connectTo(room);
            await room.onCreate(options)
            expect(room.state).toHaveProperty("stacks")
            expect(room.state).toHaveProperty("spreads")
        })
    })
})