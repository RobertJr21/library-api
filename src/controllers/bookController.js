const Book = require("../models/Book");

// Get all books
exports.getAllBooks = (req, res) => {
  const { available } = req.query;

  if (available !== undefined) {
    const isAvailable = available === "true";
    const filteredBooks = Book.getBooksByAvailability(isAvailable);
    return res.status(200).json(filteredBooks);
  }
  const allBooks = Book.getAllBooks();
  res.status(200).json(allBooks);
};

// Get book by Id
exports.getBookById = (req, res) => {
  const { id } = req.params;
  const book = Book.getBookById(parseInt(id, 10));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};
