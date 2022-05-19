const express = require("express");
const loginController = require("../controllers/loginController");
const router = express.Router();

//CREATING ROUTE
router.route("/").post(loginController.userLogin);

module.exports = router;
