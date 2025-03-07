// Import express to define router
const express = require("express");
const router = express.Router();

// Import task controller functions
const { getAllTasks, createTask, updateTask, deleteTask } = require("../controllers/todoController");

// Route endpoints

// GET endpoint to fetch all tasks
router.get("/", getAllTasks);

// POST endpoint to create a new task
router.post("/create", createTask);

// PUT endpoint to update an existing task by ID
router.put("/update/:id", updateTask);

// DELETE endpoint to delete a task by ID
router.delete("/delete/:id", deleteTask);

// Export router to be used in the server setup
module.exports = router;

// 🦖
