const authors = require("../data/authors");

class Author {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static getAllAuthors() {
    return authors;
  }

  static getAuthorById(id) {
    return authors.find((author) => author.id === id);
  }
}

module.exports = Author;
