const AWS = require("aws-sdk");
const config = require("./config");

const awsClient = () => {
  AWS.config.update(config);

  return new AWS.DynamoDB.DocumentClient();
};

module.exports = awsClient;
