"use strict";

const AWS_Client = require("../aws");
require("dotenv").config();

const Scan = async () => {
  const params = {
    TableName: process.env.ENV_TABLE_NAME,
    ScanIndexForward: true,
  };

  try {
    const data = await AWS_Client().scan(params).promise();

    return { Items: data.Items };
  } catch (err) {
    return { error: err };
  }
};

const Get = async (item) => {
  const params = {
    TableName: process.env.ENV_TABLE_NAME,
    Key: {
      ID: item.ID,
    },
  };
  try {
    const data = await AWS_Client().get(params).promise();
    return data;
  } catch (err) {
    return { error: err };
  }
};

const ReadApi = async (type, item) => {
  if (type === "Scan") return await Scan();
  else if (type === "Get") return await Get(item);
};

module.exports = ReadApi;
