const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//CREATE USER ROUTER
// router.route("/").post(userController.createUser);
router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
