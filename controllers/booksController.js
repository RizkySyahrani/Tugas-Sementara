const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../books.json");

const getAllBooks = (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.render("books/index", { books });
};

const getCreateBookForm = (req, res) => {
  res.render("books/new");
};

const createBook = (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const newBook = {
    id: Date.now().toString(),
    title: req.body.title,
    author: req.body.author,
    review: req.body.review,
  };
  books.push(newBook);
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
  res.redirect("/books");
};

const getEditBookForm = (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const book = books.find((b) => b.id === req.params.id);
  res.render("books/edit", { book });
};

const updateBook = (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const bookIndex = books.findIndex((b) => b.id === req.params.id);
  books[bookIndex] = {
    id: req.params.id,
    title: req.body.title,
    author: req.body.author,
    review: req.body.review,
  };
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
  res.redirect("/books");
};

const deleteBook = (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const updatedBooks = books.filter((b) => b.id !== req.params.id);
  fs.writeFileSync(filePath, JSON.stringify(updatedBooks, null, 2));
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
