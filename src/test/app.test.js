const axios = require("axios");

const url = "http://localhost:2137/dev";

describe("App Test", () => {
  let data;

  beforeAll(async () => {
    try {
      const res = await axios.post(`${url}/health`);
      data = res.data;
    } catch (err) {
      data = { error: err };
    }
  });

  test("App", async () => {
    expect(data).toBeDefined();
    expect(data).toBe(true);
  });
});
