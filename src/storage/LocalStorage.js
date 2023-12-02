// user : id username,email,password
const persistUser = (user) => {
  const storedUsers = localStorage.getItem("users");
  let users = storedUsers ? JSON.parse(storedUsers) : [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

const getUsers = () => {
  const storedUsers = localStorage.getItem("users");
  let users = storedUsers ? JSON.parse(storedUsers) : [];
  return users;
};

const saveUser = (username, email, password) => {
  // create user object
  const user = { username, email, password };
  // persist user
  persistUser(user);
};

const getUser = (username, password) => {
  let users = getUsers();
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  return user;
};

const getUserName = (username) => {
  let users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
};

export { saveUser, getUser, getUserName };
