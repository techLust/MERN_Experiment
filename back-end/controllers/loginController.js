const signUpModel = require("../models/signup.model");

//******************** API FOR LOGIN **************** */
exports.userLogin = async (req, res) => {
  //check if email exits by sanitizing data
  const { email, password } = req.body;
  if (!email) return res.status(402).json({ message: "Email not found" });
  if (!password) return res.status(402).json({ message: "Password not found" });

  //Fetching login data from database
  const loginData = await signUpModel.findOne({ email, password });
  //If match login successful
  if (loginData) {
    res.status(200).json({ message: "Sign in successful" });
    console.log("Login successful");
    console.log(loginData);
    // res.redirect("http://localhost:8000/");
    console.log("redirect successfull");
  } else {
    res.status(500).json({ data: "No user found" });
  }
};
