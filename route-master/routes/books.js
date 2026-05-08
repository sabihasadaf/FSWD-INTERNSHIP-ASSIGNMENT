const express = require("express");

const router = express.Router();

// GET all books
router.get("/", (req, res) => {
    res.send("Get all books");
});

// GET single book
router.get("/:id", (req, res) => {
    res.send(`Get book with ID ${req.params.id}`);
});

// ADD new book
router.post("/", (req, res) => {
    res.send("Add new book");
});

// UPDATE book
router.put("/:id", (req, res) => {
    res.send(`Update book ${req.params.id}`);
});

// DELETE book
router.delete("/:id", (req, res) => {
    res.send(`Delete book ${req.params.id}`);
});

module.exports = router;