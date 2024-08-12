const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
router.get("/", booksController.getAllBooks);
router.get("/new", booksController.getCreateBookForm);
router.post("/", booksController.createBook);
router.get("/:id/edit", booksController.getEditBookForm);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
