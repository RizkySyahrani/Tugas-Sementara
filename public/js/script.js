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
    },
  });
});
