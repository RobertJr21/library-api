const books = require("../data/books");

class Book {
  constructor(id, title, authorId, available) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this.available = available;
  }

  static getAllBooks() {
    return books;
  }

  static getBooksByAvailability(isAvailable) {
    return books.filter((book) => book.available === isAvailable);
  }

  static getBookById(id) {
    return books.find((book) => book.id === id);
  }
}

module.exports = Book;
