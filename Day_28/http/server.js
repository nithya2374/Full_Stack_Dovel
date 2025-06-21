const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
  // Default folder to look for files
  let filePath = './pages';
  let contentType = 'text/html';

  // Check the URL path requested
  if (req.url === '/') {
    filePath += '/index.html'; // Serve home page
  } else if (req.url === '/about') {
    filePath += '/about.html'; // (optional) About page if you create it
  } else {
    filePath += req.url; // Any other file (e.g. /test.html)
  }

  // Read the file from disk
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Page Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(` HTTP Server running at http://localhost:${PORT}`);
});
