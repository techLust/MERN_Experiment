const express = require("express");
const { isValidObjectId } = require("mongoose");
const app = express();
const router = express.Router();

const User = require("./models/user.model");
const Book = require("./models/book.model");
const Order = require("./models/order.model");

// Create user
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get user
router.get('/users', async(req,res)=>{
  try {
    const books = await User.find();
    return res.status(200).json({ data: books });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

// Create book
router.post("/books", async (req, res) => {
  const book = new Book(req.body);

  try {
    await book.save();
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get Book
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ data: books });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

// Search Book
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

// Place Order
router.post("/orders", async (req, res) => {
  try {
    const { book_id, user_id, address, pin_code, phone } = req.body;
    if (!isValidObjectId(book_id)) return res.status(404).json({ msg: "Invalid bookid" });
    if (!isValidObjectId(user_id)) return res.status(404).json({ msg: "Invalid userid" });
    if (!address) return res.status(404).json({ msg: "address field is missing" });
    if (!pin_code) return res.status(404).json({ msg: "pin_code field is missing" });
    if (!phone) return res.status(404).json({ msg: "phone field is missing" });
    
    // Creating order
    const order =  new Order({
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

// Get Order
router.get('/orders',async (req,res) => {
  try {
    const query = {};
    const orders = await Order.find(query);

    res.status(200).json({ data: orders });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

module.exports = router;
