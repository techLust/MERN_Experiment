const express = require("express");
const signUpController = require("../controllers/signUpController");
const router = express.Router();

router.route("/").post(signUpController.userSignUp);
module.exports = router;
