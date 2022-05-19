const Book = require("../models/book.model");

//***************CREATE BOOK******************
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

//********************GET BOOK******************
exports.getBook = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ data: books });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
