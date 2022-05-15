const mongoose = require("mongoose");

//*********** SIGN UP SCHEMA **************** */
const signUpSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SignUp = mongoose.model("Signup", signUpSchema);
module.exports = SignUp;
