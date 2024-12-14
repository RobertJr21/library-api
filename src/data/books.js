const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    authorId: 1,
    available: true,
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    authorId: 1,
    available: false,
  },
  { id: 3, title: "A Game of Thrones", authorId: 2, available: true },
  { id: 4, title: "A Clash of Kings", authorId: 2, available: true },
  { id: 5, title: "The Hobbit", authorId: 3, available: true },
  { id: 6, title: "The Fellowship of the Ring", authorId: 3, available: false },
  {
    id: 7,
    title: "Murder on the Orient Express",
    authorId: 4,
    available: true,
  },
  { id: 8, title: "And Then There Were None", authorId: 4, available: false },
  { id: 9, title: "The Shining", authorId: 5, available: true },
  { id: 10, title: "It", authorId: 5, available: false },
];

module.exports = books;
