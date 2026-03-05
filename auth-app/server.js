// Import express
const express = require("express");

// Import dotenv to read .env file
require("dotenv").config();

// Import database connection
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");

// Create express app
const app = express();

// Connect database
connectDB();

// Middleware to parse JSON body
app.use(express.json());

// Use auth routes
app.use("/api", authRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
