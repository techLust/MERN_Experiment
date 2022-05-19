const signUpModel = require("../models/signup.model");

//******************** API FOR LOGIN **************** */
exports.userLogin = async (req, res) => {
  //check if email exits
  if (req.body.email && req.body.password) {
    const loginData = await signUpModel.findOne(req.body);
    if (loginData) {
      res.status(200).json({ loginData });
      console.log("Login successful");
    } else {
      res.status(500).json({ data: "No user found" });
    }
  }
};
