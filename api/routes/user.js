const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const auth = require("../middlewares/auth");
const cors = require("cors");

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router.route("/dashboard").post(auth.verifyToken, authController.dashboard);
router.route("/token/verify").get(authController.verifyToken);

module.exports = router;
