const express = require("express");
const DeleteApi = require("../aws/apis/delete.aws.api");

const router = express.Router();

router.post("/", async (req, res) => {
  const items = req.body.items;

  const api = await DeleteApi(items);

  if (api === "Success" && !api.error) res.sendStatus(200).end();
  else res.sendStatus(406).end();
});

module.exports = router;
