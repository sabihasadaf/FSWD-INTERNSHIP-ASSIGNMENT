const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const books = [
  { id: 1, title: "Harry Potter" },
  { id: 2, title: "The Hobbit" },
  { id: 3, title: "Atomic Habits" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

// API route
app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});