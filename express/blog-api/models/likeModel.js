let likes = [];

const addLike = (postId, userId) => {
  const like = { postId, userId };
  likes.push(like);
  return like;
};

const removeLike = (postId, userId) => {
  const index = likes.findIndex(l => l.postId === postId && l.userId === userId);
  if (index === -1) return false;
  likes.splice(index, 1);
  return true;
};

const hasLiked = (postId, userId) => {
  return likes.some(l => l.postId === postId && l.userId === userId);
};

const getLikeCount = (postId) => likes.filter(l => l.postId === postId).length;

module.exports = { addLike, removeLike, hasLiked, getLikeCount };
