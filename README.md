# Library Management Backend

A simple backend API for managing books and authors.

## Features

- Manage **books**:

  - fetch books.
  - fetch book by id.
  - Filter books by availability.

- Manage **authors**:

  - fetch authors.
  - fetch author by id.

- In-memory data storage for simplicity.

---

## Technologies

- **Node.js**
- **Express.js**
- **Vercel**
- **JavaScript**

---

## Project Structure

    ├── ...
    ├── src/
    │   ├── controllers/         # API route handlers
    │   ├── data/                # In-memory data storage
    │   ├── models/              # Models for books and authors
    │   ├── routes/              # API routes
    │   └── app.js               # Main entry point
    │
    ├── .gitignore               # Ignored files for Git
    ├── package.json             # Project dependencies
    ├── README.md                # Project documentation
    ├── vercel.json              # Vercel configuration

## API Endpoints

### Books

| Method | Endpoint                   | Description             |
| ------ | -------------------------- | ----------------------- |
| GET    | /api/books                 | Fetch all books         |
| GET    | /api/books?available=true  | Fetch available books   |
| GET    | /api/books?available=false | Fetch unavailable books |

### Authors

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | /api/authors     | Fetch all authors             |
| GET    | /api/authors/:id | Fetch a specific author by ID |
