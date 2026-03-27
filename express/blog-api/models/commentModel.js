let comments = [];
let nextId = 1;

const createComment = (postId, userId, text) => {
  const comment = { id: nextId++, postId, userId, text, createdAt: new Date() };
  comments.push(comment);
  return comment;
};

const getCommentsByPost = (postId) => comments.filter(c => c.postId === postId);

const findById = (id) => comments.find(c => c.id === id);

const deleteComment = (id) => {
  const index = comments.findIndex(c => c.id === id);
  if (index === -1) return false;
  comments.splice(index, 1);
  return true;
};

module.exports = { createComment, getCommentsByPost, findById, deleteComment };
