const userModel = require("../models/userModel");

const signupHandler = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const exists = userModel.findByEmail(email); // ✅ asks the model
  if (exists) {
    return res.status(400).json({ error: "User already exists" });
  }

  const user = userModel.createUser(name, email, password); // ✅ model handles it
  res.status(201).json({ message: "User signed up successfully", user });
};

const loginHandler = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  const user = userModel.findByEmail(email); //  asks the model
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ message: "Login successful", userId: user.id });
};

module.exports = { signupHandler, loginHandler };