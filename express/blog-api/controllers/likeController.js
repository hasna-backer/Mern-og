const likeModel = require("../models/likeModel");
const postModel  = require("../models/postModel");

const toggleLike = (req, res) => {
  const postId = parseInt(req.params.postId);
  const userId = req.user.id;

  const post = postModel.findById(postId);
  if (!post) return res.status(404).json({ error: "Post not found" });

  const alreadyLiked = likeModel.hasLiked(postId, userId);

  if (alreadyLiked) {
    likeModel.removeLike(postId, userId);
    const count = likeModel.getLikeCount(postId);
    return res.json({ message: "Post unliked", likes: count });
  }

  likeModel.addLike(postId, userId);
  const count = likeModel.getLikeCount(postId);
  res.json({ message: "Post liked", likes: count });
};

module.exports = { toggleLike };
