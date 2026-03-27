// Fake DB
let users = [];
let nextId = 1;

const findByEmail = (email) => {
  return users.find(u => u.email === email);
};

const findById = (id) => {
  return users.find(u => u.id === id);
};

const createUser = (name, email, password) => {
  const user = { id: nextId++, name, email, password };
  users.push(user);
  return user;
};

module.exports = { findByEmail, findById, createUser };