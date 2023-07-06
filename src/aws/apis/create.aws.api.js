"use strict";

const AWS_Client = require("../aws");
require("dotenv").config();

const CreateApi = async (item) => {
  const scanParams = {
    TableName: process.env.ENV_TABLE_NAME,
    ScanIndexForward: true,
  };
  try {
    let itemsArray = await AWS_Client().scan(scanParams).promise();

    itemsArray.Items = itemsArray.Items.sort((a, b) => {
      return a.ID - b.ID;
    });

    let minNumber = 1;

    for (let i = 0; i < itemsArray.Items.length; i++) {
      if (itemsArray.Items[i].ID === minNumber) {
        minNumber++;
      }
    }

    const params = {
      TableName: process.env.ENV_TABLE_NAME,
      Item: { ID: minNumber, value: item.value },
    };

    try {
      await AWS_Client().put(params).promise();
      return { status: "Success", ID: minNumber };
    } catch (err) {
      return { error: err };
    }
  } catch (err) {
    return { error: err };
  }
};

module.exports = CreateApi;
