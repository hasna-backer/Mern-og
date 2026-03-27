let users = [];
let nextId = 1;

const createUser = (name, email, password) => {
  const user = { id: nextId++, name, email, password };
  users.push(user);
  return user;
};

const findByEmail = (email) => users.find(u => u.email === email);

const findById = (id) => users.find(u => u.id === id);

module.exports = { createUser, findByEmail, findById };
