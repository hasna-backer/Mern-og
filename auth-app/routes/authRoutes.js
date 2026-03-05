// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller functions
const {
  signup,
  login,
  getProfile,
} = require("../controllers/authController");

// Import auth middleware
const authMiddleware = require("../middleware/authMiddleware");

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Protected profile route
router.get("/profile", authMiddleware, getProfile);

// Export router
module.exports = router;
