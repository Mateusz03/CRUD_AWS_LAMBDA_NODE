const express = require("express");
const ReadApi = require("../aws/apis/read.aws.api");

const router = express.Router();

router.post("/", async (req, res) => {
  const item = {
    ID: req.body.ID,
    value: req.body.value,
  };
  const api = await ReadApi(req.body.type, item);

  if ((req.body.type === "Scan" || req.body.type === "Get") && !api.error)
    res.send(JSON.stringify(api)).end();
  else res.sendStatus(400).end();
});

module.exports = router;
