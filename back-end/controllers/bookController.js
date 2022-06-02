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

//********************* UPDATE BOOK ******************** */
exports.updateBook = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      data: {
        book: "Book updated",
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

//***************** DELETE BOOK ************** */
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        book: "Book deleted",
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};
