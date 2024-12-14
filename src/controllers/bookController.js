const books = require("../data/books");
let bookIdCounter = books.length; // Keeps track of the last ID

// Get all books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};
