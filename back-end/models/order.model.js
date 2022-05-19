const mongoose = require("mongoose");

// SCHEMA CREATION
const OrderShcema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// CREATING MODEL
const Order = mongoose.model("Order", OrderShcema);

// EXPORTING MODULE
module.exports = Order;
