const postModel = require("../models/postModel");

const getHomePage = (req, res) => {
  const posts = postModel.getAllPosts();
  res.json({
    message: "Welcome to the Blog!",
    totalPosts: posts.length,
    posts: posts
  });
};


const createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const post = postModel.createPost(req.user.id, title, content);
  res.status(201).json({ message: "Post created", post });
};

const getAllPosts = (req, res) => {
  const posts = postModel.getAllPosts();
  res.json(posts);
};

const getPost = (req, res) => {
  const post = postModel.findById(parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
};

const updatePost = (req, res) => {
  const { title, content } = req.body;
  const post = postModel.findById(parseInt(req.params.id));

  if (!post) return res.status(404).json({ error: "Post not found" });

  if (post.userId !== req.user.id) {
    return res.status(403).json({ error: "Not authorized" });
  }

  const updated = postModel.updatePost(parseInt(req.params.id), title, content);
  res.json({ message: "Post updated", post: updated });
};

const deletePost = (req, res) => {
  const post = postModel.findById(parseInt(req.params.id));

  if (!post) return res.status(404).json({ error: "Post not found" });

  if (post.userId !== req.user.id) {
    return res.status(403).json({ error: "Not authorized" });
  }

  postModel.deletePost(parseInt(req.params.id));
  res.json({ message: "Post deleted" });
};

module.exports = { getHomePage,createPost, getAllPosts, getPost, updatePost, deletePost };
