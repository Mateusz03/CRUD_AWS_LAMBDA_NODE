"use strict";

const AWS_Client = require("../aws");
require("dotenv").config();

const CreateApi = async (item) => {
  const scanParams = {
    TableName: process.env.ENV_TABLE_NAME,
  };

  try {
    const itemsArray = await AWS_Client().scan(scanParams).promise();
    const params = {
      TableName: process.env.ENV_TABLE_NAME,
      Item: { ID: itemsArray.Count, value: item.value },
    };

    try {
      await AWS_Client().put(params).promise();
      return { status: "Success", ID: itemsArray.Count };
    } catch (err) {
      return { error: err };
    }
  } catch (err) {
    return { error: err };
  }
};

module.exports = CreateApi;
