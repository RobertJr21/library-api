const express = require("express");
const {
  getAllAuthors,
  getAuthorById,
} = require("../controllers/authorController");
const router = express.Router();

router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);

module.exports = router;
