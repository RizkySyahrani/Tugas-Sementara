// routes/bookRouter.js
const express = require("express");
const bookController = require("../controllers/booksController");

const router = express.Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;
