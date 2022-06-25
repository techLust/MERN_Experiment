const User = require("../models/signup.model");

//******************** API FOR LOGIN **************** */
exports.userLogin = async (req, res) => {
  try {
    //check if email exits by sanitizing data
    const { email, password } = req.body;
    if (!email) return res.status(402).json({ message: "Email not found" });
    if (!password)
      return res.status(402).json({ message: "Password not found" });

    //Fetching login data from database
    const { status, user } = await User.findByCredentials(email, password);

    //If match, login successful
    if (status) {
      const token = await user.generateAuthToken();
      return res
        .status(200)
        .json({ status: true, token, message: "Successfully logged in" });
    } else {
      return res
        .status(200)
        .json({ status: false, message: "Unable to login" });
    }
  } catch (err) {
    console.log(err);
    return res.status(503).json({ data: "Something went wrong!" });
  }
};
