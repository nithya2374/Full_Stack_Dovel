const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON
const DATA = './users.json'; // File to store users

function readUsers() {
  return JSON.parse(fs.readFileSync(DATA));//read data from file
}

function writeUsers(users) {
  fs.writeFileSync(DATA, JSON.stringify(users, null, 2));//write a data to a file
}

//get all users 
// return all users data from json file
app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

//get one user by id
//searches for a user by ID and returns them if found.
app.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

//post a new user in a file
//adds a new user with a unique ID based on the current timestamp.
app.post('/users', (req, res) => {
  const users = readUsers();
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
});

//put
//Completely replaces the user (except the ID).
app.put('/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');
  users[index] = { id: users[index].id, ...req.body };
  writeUsers(users);
  res.json(users[index]);
});

//patch -partial update
//Updates only the fields provided in the request body.
app.patch('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  Object.assign(user, req.body);
  writeUsers(users);
  res.json(user);
});

//delete user
//Deletes the user by filtering them out.
app.delete('/users/:id', (req, res) => {
  let users = readUsers();
  const newUsers = users.filter(u => u.id !== parseInt(req.params.id));
  if (newUsers.length === users.length) return res.status(404).send('User not found');
  writeUsers(newUsers);
  res.sendStatus(204); // No content
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
