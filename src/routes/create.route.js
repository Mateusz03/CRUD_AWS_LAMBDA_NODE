const express = require("express");
const CreateApi = require("../aws/apis/create.aws.api");

const router = express.Router();

const updateRegExp = /^[A-Za-z0-9 -]*$/;

router.post("/", async (req, res) => {
  const item = req.body;

  if (updateRegExp.test(item.value) && item.value !== "") {
    const api = await CreateApi(item);
    console.log(api);

    if (api.status === "Success" && !api.error) res.send({ ID: api.ID }).end();
    else res.sendStatus(406).end();
  } else res.sendStatus(403).end();
});

module.exports = router;
