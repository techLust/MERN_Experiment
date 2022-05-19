const User = require("../models/user.model");

//******************CREATE USER***********************
exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

//********************GET USER***********************
exports.getUser = async (req, res) => {
  try {
    const books = await User.find();
    return res.status(200).json({ data: books });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

//*********************UPDATE USER**********************
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      data: {
        user: "Updated",
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

//********************* DELETE USER**************************
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: {
        user: "Deleted",
      },
    });
  } catch (err) {
    res.status(404).json({
      data: "Fail",
      message: err,
    });
    console.log(err);
  }
};
