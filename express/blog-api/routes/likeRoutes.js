const express         = require("express");
const router          = express.Router();
const likeController  = require("../controllers/likeController");
const checkAuth       = require("../middleware/auth");

router.post("/:postId/like", checkAuth, likeController.toggleLike);

module.exports = router;
