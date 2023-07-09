const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/health", (req, res) => {
  res.send("true").end();
});

const createRoute = require("./src/routes/create.route");
const readRoute = require("./src/routes/read.route");
const updateRoute = require("./src/routes/update.route");
const deleteRoute = require("./src/routes/delete.route");

app.use("/create", createRoute);
app.use("/read", readRoute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);

if (process.env.ENV_ENVIROMENT === "dev") {
  const PORT = 2137;

  app.listen(PORT, () => {
    console.log(`App listen on http://localhost:${PORT}/`);
  });
} else {
  exports.handler = serverless(app);
}
