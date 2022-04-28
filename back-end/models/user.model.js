const mongoose = require("mongoose");

// Schema for Teacher login credential
const UserShcema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Creating model of schema
const User = mongoose.model("User", UserShcema);
module.exports = User;
