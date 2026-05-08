const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(5000, () => {
    console.log("Server running on port 3000");
});