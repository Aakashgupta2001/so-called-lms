const authService = require("../service/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res, next) => {
  try {
    let body = req.body;
    if (body.name && !body.displayName) {
      body.displayName = body.name;
    }
    if (!body.password || body.password.length < 5) {
      return res.status(406).send("Password required");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);
    body.password = hashPassword;

    const user = await authService.save(body);
    return res.send(user);
  } catch (err) {
    return res.send(err);
  }
};
