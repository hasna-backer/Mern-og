const express = require("express");
const router = express.Router();

const userController=require('../controllers/userController')
const checkAuth=require('../middleware/auth')



//signup
router.post("/signup",userController.signupHandler)
// Login
router.post("/login",userController.loginHandler);
//getProfile
router.get("/profile",checkAuth,userController.profileHandler)

module.exports=router