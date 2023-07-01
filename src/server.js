const express = require("express");

const app = express();
const PORT = 2137;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const createRoute = require("./routes/create.route");
const readRoute = require("./routes/read.route");
const updateRoute = require("./routes/update.route");
const deleteRoute = require("./routes/delete.route");

app.use("/create", createRoute);
app.use("/read", readRoute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);

app.listen(PORT, () => {
  console.log(`App listen on http://localhost:${PORT}/`);
});
