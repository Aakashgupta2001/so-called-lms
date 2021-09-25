const jwt = require("jsonwebtoken");

module.exports.verifyToken = function (req, res, next) {
  //get the token from the header if present

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
    next();
  } catch (err) {
    return res.send({ error: err });
  }
};
