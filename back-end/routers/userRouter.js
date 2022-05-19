const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//CREATE USER ROUTER
router.route("/").post(userController.createUser).get(userController.getUser);
router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
