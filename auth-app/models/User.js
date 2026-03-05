// Import mongoose
const mongoose = require("mongoose");

// Create schema for User
const userSchema = new mongoose.Schema({
  // Name field
  name: {
    type: String,
    required: true, // Must provide name
  },

  // Email field
  email: {
    type: String,
    required: true,
    unique: true, // No duplicate emails allowed
  },

  // Password field
  password: {
    type: String,
    required: true,
  },
});

// Export model
module.exports = mongoose.model("User", userSchema);
