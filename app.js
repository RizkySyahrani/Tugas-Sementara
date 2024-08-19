const express = require("express");
const path = require("path");
const cors = require("cors"); // Import cors
const bookRoutes = require("./routes/bookRoutes");
const app = express();

// Mengaktifkan CORS untuk semua request
app.use(cors());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware untuk parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", bookRoutes); // Prefix '/api' untuk semua route buku

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
