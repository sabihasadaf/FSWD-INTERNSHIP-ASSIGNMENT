const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

// Sample Task Data
let tasks = [
  {
    id: 1,
    title: "Complete Internship Assignment",
    status: "Pending",
  },
  {
    id: 2,
    title: "Learn Express.js",
    status: "Completed",
  },
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET single task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  res.json(task);
});

// POST new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    status: req.body.status,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// PUT update task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;

  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);

  res.send("Task deleted successfully");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});