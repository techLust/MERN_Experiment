const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    country_code: {
      type: Number,
      required: true,
      length: 3,
    },
    mobile_number: {
      type: Number,
      required: true,
      length: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("tests", TestSchema);
module.exports = Test;
