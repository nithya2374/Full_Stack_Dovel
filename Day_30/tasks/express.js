const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Route to read a file (could throw async error)
app.get('/read-file', (req, res, next) => {
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      const error = new Error("File not found!");
      error.status = 404;
      return next(error);
    }

    res.send(data);
  });
});

// Route that throws a manual error
app.get('/cause-error', (req, res, next) => {
  const error = new Error("Something failed here!");
  error.status = 500;
  next(error);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Unexpected Server Error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
