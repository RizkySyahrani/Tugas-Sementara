const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const bookRoutes = require("./routes/bookRoutes");
const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");

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
  console.log("Server is running on http://localhost:3000");
});
