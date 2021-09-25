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

exports.login = async (req, res, next) => {
  if (!req.body.email || req.body.email == "") {
    return res.send("Please enter email");
  }
  try {
    const user = await authService.findOne({ email: req.body.email.toLowerCase() });
    if (!user) {
      return res.send("User not found");
    }
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.send("Incorrect password");
    }
    let token = jwt.sign({ name: user.name, role: user.roles, _id: user._id, email: user.email }, process.env.ACCESS_SECRET_TOKEN, {
      expiresIn: "24h",
    });

    return res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      displayName: displayName,
      Authorization: token,
    });
  } catch (err) {
    return res.send(err);
  }
};
