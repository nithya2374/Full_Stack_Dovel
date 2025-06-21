const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public folder 
app.use(express.static(path.join(__dirname, 'public')));

// Basic Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

// About Route
app.get('/about', (req, res) => {
  res.send('<h1>This is the About Page!</h1>');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.status(200).send('This is the Contact Page!');
});


// GET with Route Parameters
// Example: http://localhost:3000/user/101
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`You requested User ID: ${userId}`);
});

//  GET with Query Parameters
// Example: http://localhost:3000/search?name=Nithya&age=21
app.get('/search', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Search result for: Name = ${name}, Age = ${age}`);
});


// Example: http://localhost:3000/data
app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file.');
    }

    res.type('json').send(data); 
  });
});


app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
