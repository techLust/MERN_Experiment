const mongoose = require("mongoose");

//CREATING SCHEMA
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

//CREATING USER MODEL
const User = mongoose.model("User", UserShcema);

//EXPORT USER MODEL
module.exports = User;
