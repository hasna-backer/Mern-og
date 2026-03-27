const userModel = require("../models/userModel");

const checkAuth = (req, res, next) => {
  const userId = req.headers["user-id"];

  if (!userId) {
    return res.status(401).json({ error: "Please login first" });
  }

  const user = userModel.findById(parseInt(userId));
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  req.user = user;
  next();
};

module.exports = checkAuth;
