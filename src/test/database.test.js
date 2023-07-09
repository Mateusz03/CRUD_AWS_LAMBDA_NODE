const axios = require("axios");

const url = "http://localhost:2137/dev";

describe("Database Health Scan", () => {
  let data;

  beforeAll(async () => {
    try {
      const res = await axios.post(`${url}/read`, { type: "Scan" });
      data = res;
    } catch (err) {
      data = { error: err };
    }
  });

  test("Scan test", async () => {
    expect(data).toBeDefined();
    expect(data.error).toBeUndefined();
  });
});
