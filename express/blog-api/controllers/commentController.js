const commentModel = require("../models/commentModel");
const postModel    = require("../models/postModel");

const addComment = (req, res) => {
  const { text } = req.body;
  const postId = parseInt(req.params.postId);

  if (!text) {
    return res.status(400).json({ error: "Comment text is required" });
  }

  const post = postModel.findById(postId);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const comment = commentModel.createComment(postId, req.user.id, text);
  res.status(201).json({ message: "Comment added", comment });
};

const getComments = (req, res) => {
  const postId = parseInt(req.params.postId);
  const comments = commentModel.getCommentsByPost(postId);
  res.json(comments);
};

const deleteComment = (req, res) => {
  const comment = commentModel.findById(parseInt(req.params.commentId));

  if (!comment) return res.status(404).json({ error: "Comment not found" });

  if (comment.userId !== req.user.id) {
    return res.status(403).json({ error: "Not authorized" });
  }

  commentModel.deleteComment(parseInt(req.params.commentId));
  res.json({ message: "Comment deleted" });
};

module.exports = { addComment, getComments, deleteComment };
