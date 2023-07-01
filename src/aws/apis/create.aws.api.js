const AWS_Client = require("../aws");

const CreateApi = async (item) => {
  const params = {
    TableName: process.env.ENV_TABLE_NAME,
    Item: { ID: item.ID, value: item.value },
  };

  try {
    await AWS_Client().put(params).promise();
    return "Success";
  } catch (err) {
    return { error: err };
  }
};

module.exports = CreateApi;
