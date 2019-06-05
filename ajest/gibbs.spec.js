const request = require("supertest");

const app = require("../server/index");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});

describe("test post methods", () => {
  test("It should respond with status 200", () => {
    return request(app)
      .post("/api/restaurant")
      .expect(200);
  });
});
