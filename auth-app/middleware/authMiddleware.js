// Import JWT
const jwt = require("jsonwebtoken");

// Middleware function to verify token
module.exports = (req, res, next) => {
  // Get token from request header
  const token = req.header("Authorization");

  // If no token
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user to request
    req.user = decoded;

    // Move to next middleware
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
