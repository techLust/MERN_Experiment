const signUpModel = require("../models/signup.model");

exports.userSignUp = async (req, res) => {
  const signup = new signUpModel(req.body);
  try {
    await signup.save();
    res.send(signup);
  } catch (err) {
    res.status(500).json({
      status: "Sign up failed",
      data: {
        signup: "Check your data",
      },
    });
  }
};
