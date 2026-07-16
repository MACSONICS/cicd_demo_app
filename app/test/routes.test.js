const request = require("supertest");
const app = require("../server");

describe("Routes", () => {

  

  test("GET /health", async () => {

    const response =
      await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.status)
      .toBe("UP");
  });

  test("GET /api/users", async () => {

    const response =
      await request(app).get("/api/users");

    expect(response.statusCode).toBe(200);

    expect(response.body.length)
      .toBe(2);
  });

  test("GET /api/version", async () => {

    const response =
      await request(app).get("/api/version");

    expect(response.statusCode).toBe(200);

    expect(response.body.version)
      .toBe("1.0.0");
  });

});