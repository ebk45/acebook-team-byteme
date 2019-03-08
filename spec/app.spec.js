const Request = require("request");
const Bit = require("../models/bit.model");

describe("server",() => {
  let port = {};
  beforeAll(() => {
    port = require("../app")
  });
  // afterAll(() => {
  //   port.close();
  // });

  describe("GET /",() => {
    let data = {};
    beforeAll((done) => {
      Request.get("http://localhost:1234/", (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });
    it("Body", () => {
      expect(data.body).toBe("Hello world");
    });
  });

  describe("GET /bits",() => {
    let data = {};
    beforeAll((done) => {
      Request.get("http://localhost:1234/bits", (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });
    // it("Body", () => {
    //   expect(data.body).toContain(Bit.bit_all);
    // });
  });
});
