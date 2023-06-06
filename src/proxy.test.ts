import supertest from "supertest";
import { expect} from "chai";

import { proxyServer } from ".";

const requester = supertest(proxyServer);

describe("Proxy", () => {
    it("should proxy requests", async () => {
        const response = await requester.get("/");
        expect(response.status).to.equal(200);
    });
});