const express        = require("express");
const router         = express.Router();
const userController = require("../controllers/userController");
const checkAuth      = require("../middleware/auth");

router.post("/signup",  userController.signup);
router.post("/login",   userController.login);
router.get("/profile",  checkAuth, userController.getProfile);

module.exports = router;
