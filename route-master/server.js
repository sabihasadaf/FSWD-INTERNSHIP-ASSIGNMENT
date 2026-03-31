const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing JSON

// ✅ ADD THIS PART HERE
app.get("/", (req, res) => {
  res.send("Welcome to Bookstore API");
});

// Sample Data
let books = [
  { id: 1, title: "Harry Potter", authorId: 1 },
  { id: 2, title: "The Hobbit", authorId: 2 },
];

let authors = [
  { id: 1, name: "J.K. Rowling" },
  { id: 2, name: "J.R.R. Tolkien" },
];

// ================= BOOK ROUTES =================

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get single book
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

// Add new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    authorId: req.body.authorId,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update book
app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");

  book.title = req.body.title || book.title;
  book.authorId = req.body.authorId || book.authorId;

  res.json(book);
});

// Delete book
app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.send("Book deleted");
});


// ================= AUTHOR ROUTES =================

// Get all authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Get single author
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).send("Author not found");
  res.json(author);
});

// Add new author
app.post("/authors", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name,
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// Update author
app.put("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).send("Author not found");

  author.name = req.body.name || author.name;

  res.json(author);
});

// Delete author
app.delete("/authors/:id", (req, res) => {
  authors = authors.filter(a => a.id != req.params.id);
  res.send("Author deleted");
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});