const express = require("express");
const ReadApi = require("../aws/apis/read.aws.api");

const router = express.Router();

router.post("/", async (req, res) => {
  const item = {
    ID: req?.body.ID,
    value: req?.body.value,
  };

  if (req.body.type === "Scan" || req.body.type === "Get") {
    const api = await ReadApi(req.body.type, item);

    if (!api.error) res.send(JSON.stringify(api)).end();
    else res.sendStatus(406).end();
  } else res.sendStatus(403).end();
});

module.exports = router;
