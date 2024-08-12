const Book = require("../models/book");
// GET all books
const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.render("books/index", { books });
};

// GET form to create a new book
const getCreateBookForm = (req, res) => {
  res.render("books/new");
};

// POST create a new book
const createBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    review: req.body.review,
  });
  await book.save();
  res.redirect("/books");
};

// GET form to edit a book
const getEditBookForm = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("books/edit", { book });
};

// PUT update a book
const updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.title = req.body.title;
  book.author = req.body.author;
  book.review = req.body.review;
  await book.save();
  res.redirect("/books");
};

// DELETE a book
const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/books");
};

module.exports = {
  getAllBooks,
  getCreateBookForm,
  createBook,
  getEditBookForm,
  updateBook,
  deleteBook,
};
