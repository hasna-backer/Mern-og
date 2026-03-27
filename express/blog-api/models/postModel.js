let posts = [];
let nextId = 1;

const createPost = (userId, title, content) => {
  const post = { id: nextId++, userId, title, content, createdAt: new Date() };
  posts.push(post);
  return post;
};

const getAllPosts = () => posts;

const findById = (id) => posts.find(p => p.id === id);

const updatePost = (id, title, content) => {
  const post = posts.find(p => p.id === id);
  if (!post) return null;
  post.title = title;
  post.content = content;
  return post;
};

const deletePost = (id) => {
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
};

module.exports = { createPost, getAllPosts, findById, updatePost, deletePost };
