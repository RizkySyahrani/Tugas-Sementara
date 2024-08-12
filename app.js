const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const bookRoutes = require("./routes/bookRoutes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.redirect("/books");
});

app.get("/test", (req, res) => {
  res.send("Server is running without database!");
});

app.listen(3000, () => {
  console.log("Server is running on https://localhost:3000");
});
