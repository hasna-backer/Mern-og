const userModel = require("../models/userModel");

const signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const exists = userModel.findByEmail(email);
  if (exists) {
    return res.status(400).json({ error: "Email already registered" });
  }

  const user = userModel.createUser(name, email, password);
  res.status(201).json({ message: "Signup successful", user });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  const user = userModel.findByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ message: "Login successful", userId: user.id });
};

const getProfile = (req, res) => {
  const { password, ...profile } = req.user;
  res.json(profile);
};

module.exports = { signup, login, getProfile };
