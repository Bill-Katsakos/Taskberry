// Import mongoose to create schema and model
const mongoose = require("mongoose");

// Define schema structure for tasks
const tasksSchema = new mongoose.Schema({
  task: String, // Task description
  completed: { type: Boolean, default: false }, // Completion status, default to false
});

// Create Task model using the defined schema
const Task = mongoose.model("Task", tasksSchema);

// Export the Task model
module.exports = Task;

// 🦖
