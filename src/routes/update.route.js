const express = require("express");
const UpdateApi = require("../aws/apis/update.aws.api");

const router = express.Router();

router.post("/", async (req, res) => {
  const item = req.body;

  const api = await UpdateApi(item);
  if (api === "Success" && !api.error) res.sendStatus(200).end();
  else res.sendStatus(406).end();
});

module.exports = router;
