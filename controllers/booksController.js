const fs = require("fs");
const path = require("path");

// Pastikan path menuju file JSON sesuai
const filePath = path.join(__dirname, "../book.json");

// Pastikan file JSON ada atau buat file kosong jika belum ada
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

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
    review: req.body.review, // Pastikan review disimpan
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
    review: req.body.review, // Pastikan review diupdate
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
