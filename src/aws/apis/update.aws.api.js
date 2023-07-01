const AWS_Client = require("../aws");

const UpdateApi = async (item) => {
  const params = {
    TableName: process.env.ENV_TABLE_NAME,
    Key: { ID: item.ID },
    UpdateExpression: "set #MyVariable = :v",
    ExpressionAttributeNames: {
      "#MyVariable": "value",
    },
    ExpressionAttributeValues: {
      ":v": item.value,
    },
  };

  try {
    await AWS_Client().update(params).promise();

    return "Success";
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

module.exports = UpdateApi;
