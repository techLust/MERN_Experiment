const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

//BOOK ROUTER
router.route("/").post(bookController.createBook).get(bookController.getBook);
router
  .route("/:id")
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

//EXPORTING MODULE
module.exports = router;
