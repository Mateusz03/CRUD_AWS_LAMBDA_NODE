"use strict";
const config = require("./config");
const AWS = require("aws-sdk");

const awsClient = () => {
  const AWS_config = config;
  AWS.config.update(AWS_config);

  return new AWS.DynamoDB.DocumentClient();
};

module.exports = awsClient;
