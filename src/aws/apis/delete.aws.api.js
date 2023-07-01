const AWS_Client = require("../aws");

const DeleteApi = async (item) => {
  console.log(item);
  const params = {
    TableName: process.env.ENV_TABLE_NAME,
    Key: { ID: item.ID },
  };

  try {
    await AWS_Client().delete(params).promise();
    return "Success";
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

module.exports = DeleteApi;
