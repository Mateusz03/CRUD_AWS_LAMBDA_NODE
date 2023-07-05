const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  region: process.env.ENV_REGION,
  accessKeyId: process.env.ENV_ACCESS_KEY,
  secretAccessKey: process.env.ENV_SECRET_ACCESS_KEY,
};
