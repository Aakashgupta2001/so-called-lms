const userModel = require("../model/user");

exports.save = async (body) => {
  return await userModel.create(body);
};
