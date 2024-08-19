// controllers/bookController.js
const BookModel = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await BookModel.getBookById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const id = await BookModel.createBook(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    await BookModel.updateBook(req.params.id, req.body);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookModel.deleteBook(id); // Pastikan model Anda memiliki metode deleteBook
    res.status(204).end(); // 204 No Content, buku berhasil dihapus
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
