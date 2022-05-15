const express = require("express");
const { isValidObjectId } = require("mongoose");
const router = express.Router();

const User = require("./models/user.model");
const Book = require("./models/book.model");
const Order = require("./models/order.model");
const Demo = require("./models/demo.model");

//********************************* POST REQUEST APIs ************************** */
// CREATE USER

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// CREATE BOOK
router.post("/books", async (req, res) => {
  const book = new Book(req.body);

  try {
    await book.save();
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// ******************** PLACE ORDER *******************************
router.post("/orders", async (req, res) => {
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
    const order = new Order({
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
});

// ************************** GET REQUEST APIs ************************************

// GET USER
router.get("/users", async (req, res) => {
  try {
    const books = await User.find();
    return res.status(200).json({ data: books });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

// GET BOOK
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ data: books });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

// GET ORDER
router.get("/orders", async (req, res) => {
  try {
    const query = {};
    const orders = await Order.find(query);

    res.status(200).json({ data: orders });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

//****************************** SEARCH REQUEST APIs **************************** */
// SEARCH BOOK
router.get("/books/search", async (req, res) => {
  try {
    const search = req.query.search;
    if (!search)
      return res.status(404).json({ msg: "Search field is missing" });

    const result = await Book.aggregate([
      {
        $match: {
          title: {
            $regex: search,
          },
        },
      },
    ]);

    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

//******************************** UPDATE REQUEST APIs *********************** */

router.patch("/user/update/:id", async (req, res) => {
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
});
// ************************ DELETE REQUEST APIs *********************************

// DELETE USER
router.delete("/book/delete/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: {
        book: "Deleted",
      },
    });
  } catch (err) {
    res.status(404).json({
      data: "Fail",
      message: err,
    });
    console.log(err);
  }
});

//***************************** APIs FOR TESTING ************************** */

// POST REQUEST TEST
router.post("/test", async (req, res) => {
  const test = new Demo(req.body);
  try {
    await test.save();
    return res.status(200).json({ data: test });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
