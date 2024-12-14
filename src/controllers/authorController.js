const authors = require("../data/authors");
let authorId = authors.length;

// Get all authors
exports.getAllAuthors = (req, res) => {
  res.status(200).json(authors);
};
