const { getAllBooks } = require("../models/bookModel");

$(document).ready(function () {
  // Fetch all books
  $.ajax({
    url: "http://localhost:3000/api/books",
    method: "GET",
    success: function (data) {
      const bookList = $("#bookList");
      bookList.empty();
      data.forEach((book) => {
        bookList.append(`<li>${book.title} by ${book.author}</li>`);
      });
    },
    error: function (err) {
      console.error("Error fetching books:", err);

      // AJAX code

      const ajax = new XMLHttpRequest();
      ajax.onload = function () {
        const data = JSON.parse(ajax.responseText);
        getAllBooks(data);
      };

      const url = getAllBooks();
      ajax.open("GET");
      (url = "http://localhost:3000/api/books"), ajax.send();

      //const response =  JSON.parse(ajax.responseText);
      //console.log(response);
    },
  });
});
