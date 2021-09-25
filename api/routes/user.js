const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

router.route("/signup").post(authController.signup);

module.exports = router;
