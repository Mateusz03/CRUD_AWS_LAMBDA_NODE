const express = require("express");
const AWS_Client = require("../../aws/aws");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(await AWS_Client().scan().promise());
});

module.exports = router;
