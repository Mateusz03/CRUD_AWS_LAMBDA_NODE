"use strict";

const AWS_Client = require("../aws");
require("dotenv").config();

const DeleteApi = async (items) => {
  let spliceItems = [];
  try {
    for (let i = 0; i <= items.length % 25; i++) {
      if (items.length >= 25) {
        spliceItems.push(items.splice(0, 25));
      } else {
        spliceItems.push(items);
      }
    }

    for (let i = 0; i < spliceItems.length; i++) {
      let deleteItems = [];

      spliceItems[i].map((ID) => {
        deleteItems.push({ DeleteRequest: { Key: ID } });
      });

      let params = {
        RequestItems: {
          [process.env.ENV_TABLE_NAME]: deleteItems,
        },
      };
      await AWS_Client().batchWrite(params).promise();
    }
    return "Success";
  } catch (err) {
    return { error: err };
  }
};

module.exports = DeleteApi;
