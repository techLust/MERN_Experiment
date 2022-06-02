const signUpModel = require("../models/signup.model");

//********************* CREATE USER (SIGN UP) ******************* */
exports.userSignUp = async (req, res) => {
  const signup = new signUpModel(req.body);
  try {
    await signup.save();
    res.send(signup);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Sign up failed",
      data: {
        signup: "Check your data",
      },
    });
  }
};

//********************* GET USER (SIGN UP) ******************** */
exports.getUser = async (req, res) => {
  try {
    const users = await signUpModel.find();
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(500).json({ Msg: "Something went wrong" });
  }
};

//***************** UPDATE USER ************************* */
exports.updateUser = async (req, res) => {
  try {
    await signUpModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      data: {
        user: "User updated",
      },
    });
  } catch (err) {
    res.status(404).json({
      data: "Failed",
      message: err,
    });

    console.log(err);
  }
};

//****************** DELETE USER ********************** */
exports.deleteUser = async (req, res) => {
  try {
    await signUpModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        user: "User deleted",
      },
    });
  } catch (err) {
    res.status(404).json({
      satus: "Delete failed",
      message: err,
    });
  }
};
