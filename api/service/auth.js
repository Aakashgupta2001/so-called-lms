const userModel = require("../model/user");

exports.save = async (body) => {
  return await userModel.create(body);
};

exports.findOne = async (filter, projection) => {
  return await userModel.findOne(filter, projection);
};
