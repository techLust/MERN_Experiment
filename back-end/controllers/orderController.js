const orderModel = require("../models/order.model");
const { isValidObjectId } = require("mongoose");

//=========================// CREATE ORDER //=========================
exports.placeOrder = async (req, res) => {
  try {
    const { book_id, user_id, address, pin_code, phone } = req.body;
    if (!isValidObjectId(book_id))
      return res.status(404).json({ msg: "Invalid bookid" });
    if (!isValidObjectId(user_id))
      return res.status(404).json({ msg: "Invalid userid" });
    if (!address)
      return res.status(404).json({ msg: "address field is missing" });
    if (!pin_code)
      return res.status(404).json({ msg: "pin_code field is missing" });
    if (!phone) return res.status(404).json({ msg: "phone field is missing" });

    // Creating order
    const order = new orderModel({
      bookId: book_id,
      userId: user_id,
      address,
      phone,
      pinCode: pin_code,
    });

    // saving record
    await order.save();

    return res.status(200).json({ data: order });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

//==========================// GET ORDER //============================
exports.getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json({ data: orders });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

//=========================// UPDATE ORDER //============================
exports.updateOrders = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      data: {
        order: "Order updated",
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error,
    });
  }
};
//=========================// DELETE ORDERS //===========================
