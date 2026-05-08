const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

let users = [];

const SECRET_KEY = "mysecretkey";


// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Secure Login API Running");
});


// SIGNUP GET ROUTE (FOR BROWSER TESTING)
app.get("/signup", (req, res) => {
    res.send("Signup Page");
});


// SIGNUP POST ROUTE
app.post("/signup", async (req, res) => {

    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword
    });

    res.send("Signup Successful");
});


// LOGIN GET ROUTE (FOR BROWSER TESTING)
app.get("/login", (req, res) => {
    res.send("Login Page");
});


// LOGIN POST ROUTE
app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        user => user.username === username
    );

    if (!user) {
        return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        return res.send("Wrong Password");
    }

    const token = jwt.sign(
        { username: user.username },
        SECRET_KEY
    );

    res.json({
        message: "Login Successful",
        token
    });
});


// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});