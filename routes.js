const express = require("express");
const cookieParser = require("cookie-parser");

//////////////////////////////
const authRoute = require("./api/routes/user");

module.exports.default = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use("/api/v1/auth", authRoute);
};
