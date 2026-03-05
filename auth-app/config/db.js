// Import mongoose to connect MongoDB
const mongoose = require("mongoose");

// Function to connect database
const connectDB = async () => {
  try {
    // Connect using environment variable MONGO_URI
    await mongoose.connect(process.env.MONGO_URI);

    // Log success message
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    // If error occurs, print error and stop server
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

// Export function so it can be used in server.js
module.exports = connectDB;
