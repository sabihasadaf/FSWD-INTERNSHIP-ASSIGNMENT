const express = require("express");

const router = express.Router();

// GET all authors
router.get("/", (req, res) => {
    res.send("Get all authors");
});

// GET single author
router.get("/:id", (req, res) => {
    res.send(`Get author with ID ${req.params.id}`);
});

// ADD author
router.post("/", (req, res) => {
    res.send("Add new author");
});

// UPDATE author
router.put("/:id", (req, res) => {
    res.send(`Update author ${req.params.id}`);
});

// DELETE author
router.delete("/:id", (req, res) => {
    res.send(`Delete author ${req.params.id}`);
});

module.exports = router;