const Author = require("../models/Author");

// Get all authors
exports.getAllAuthors = (req, res) => {
  const authors = Author.getAllAuthors();
  res.status(200).json(authors);
};

// Get author by Id
exports.getAuthorById = (req, res) => {
  const { id } = req.params;
  const author = Author.getAuthorById(parseInt(id, 10));

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};
