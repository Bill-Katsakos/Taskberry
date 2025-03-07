// Import Task model from models directory
const Task = require("../models/todoModel");

// Retrieve all tasks from the database
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send({ msg: "Here are the tasks: 👇", tasks });
  } catch (error) {
    res.status(500).send({ msg: "Cannot retrieve authors 😱", error: error.message });
  }
};

// Create a new task and save it to the database
const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).send({ msg: "Task created successfully 🐣", createTask });
  } catch (error) {
    res.status(500).send({ msg: "Cannot retrieve authors 😱", error: error.message });
  }
};

// Update an existing task by ID
const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateTask) {
      res.status(404).send({ msg: "Task not found. 🕵🏿" });
    } else {
      res.status(200).send({ msg: "Task updated successfully 🐥", updateTask });
    }
  } catch (error) {
    res.status(500).send({ msg: "Cannot retrieve tasks 😱", error: error.message });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      res.status(404).send({ msg: "Task not found. 🕵🏿" });
    } else {
      res.status(200).send({ msg: "Task deleted successfully 🏴‍☠️", deleteTask });
    }
  } catch (error) {
    res.status(500).send({ msg: "Cannot retrieve tasks 😱", error: error.message });
  }
};

// Export the controller functions
module.exports = { getAllTasks, createTask, updateTask, deleteTask };

// 🦖
