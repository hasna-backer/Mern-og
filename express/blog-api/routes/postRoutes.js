const express        = require("express");
const router         = express.Router();
const postController = require("../controllers/postController");
const checkAuth      = require("../middleware/auth");

router.get("/home", postController.getHomePage);
router.get("/",       postController.getAllPosts);
router.get("/:id",    postController.getPost);
router.post("/",      checkAuth, postController.createPost);
router.put("/:id",    checkAuth, postController.updatePost);
router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;