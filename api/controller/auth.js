const authService = require("../service/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.verifyToken = async (req, res, next) => {
  token = req.headers.authorization;
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    return res.send("Unauthorzied");
  }
  try {
    if (token.includes("Bearer")) {
      token = token.substr(7);
    }
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
    req.user = decoded;
    return res.status(202).send(req.user);
  } catch (err) {
    return res.send({ error: err });
  }
};

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
    return res.status(202).send(user);
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.login = async (req, res, next) => {
  if (!req.body.email || req.body.email == "") {
    return res.send("Please enter email");
  }
  try {
    const user = await authService.findOne({
      email: req.body.email.toLowerCase(),
    });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(400).send("Incorrect password");
    }
    let token = await jwt.sign(
      { name: user.name, role: user.roles, _id: user._id, email: user.email },
      process.env.ACCESS_SECRET_TOKEN,
      {
        expiresIn: "24h",
      }
    );
    console.log(token);
    console.log(user);
    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      displayName: user.displayName,
      Authorization: token,
    };
    console.log(response);
    return res.status(202).send(response);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

exports.dashboard = (req, res, next) => {
  console.log(req.user);
  res.send(req.user);
};
