const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Route untuk mendapatkan semua buku
router.get("/", booksController.getAllBooks);

// Route untuk menampilkan form pembuatan buku baru
router.get("/new", booksController.getCreateBookForm);

// Route untuk membuat buku baru
router.post("/", booksController.createBook);

// Route untuk menampilkan form edit buku
router.get("/:id/edit", booksController.getEditBookForm);

// Route untuk mengupdate buku
router.put("/:id", booksController.updateBook);

// Route untuk menghapus buku
router.delete("/:id", booksController.deleteBook);

module.exports = router;
