// Import necessary modules
const express = require("express");
const cors = require("cors");
const db = require("./config/connection");
const taskRoutes = require("./Routers/todoRouter");

// Initialize express application
const app = express();

// Define port number
const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Routing middleware for task-related routes
app.use("/", taskRoutes);

// Start server and listen on the defined port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 🦖
