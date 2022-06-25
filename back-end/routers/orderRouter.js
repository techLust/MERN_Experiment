const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

//CREATING ROUTE
router
  .route("/")
  .post(orderController.placeOrder)
  .get(orderController.getOrders);

router.route("/:id").patch(orderController.updateOrders);

module.exports = router;
