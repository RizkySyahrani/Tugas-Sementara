const { getAllBooks } = require("../models/bookModel");

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
