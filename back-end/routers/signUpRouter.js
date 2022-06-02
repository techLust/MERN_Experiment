const express = require("express");
const signUpController = require("../controllers/signUpController");
const router = express.Router();

router
  .route("/")
  .post(signUpController.userSignUp)
  .get(signUpController.getUser);

router
  .route("/:id")
  .patch(signUpController.updateUser)
  .delete(signUpController.deleteUser);

module.exports = router;
