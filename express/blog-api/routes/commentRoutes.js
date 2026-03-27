const express           = require("express");
const router            = express.Router();
const commentController = require("../controllers/commentController");
const checkAuth         = require("../middleware/auth");

router.get("/:postId/comments",               commentController.getComments);
router.post("/:postId/comments",  checkAuth,  commentController.addComment);
router.delete("/comments/:commentId", checkAuth, commentController.deleteComment);

module.exports = router;
