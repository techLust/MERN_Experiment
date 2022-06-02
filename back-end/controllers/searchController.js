const Book = require("../models/book.model");

//*******************SEARCH BOOK**********************
exports.searchBook = async (req, res) => {
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
};
