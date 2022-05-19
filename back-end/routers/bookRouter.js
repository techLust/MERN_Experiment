const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

//BOOK ROUTER
router.route("/").post(bookController.createBook).get(bookController.getBook);

//EXPORTING MODULE
module.exports = router;
