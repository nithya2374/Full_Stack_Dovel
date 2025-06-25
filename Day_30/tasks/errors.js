//Error Handling in Node.js

//1. Synchronous Error Handling with try...catch

try {
  let result = undefinedVar + 1; // This will throw a ReferenceError
  console.log(result); // Won’t execute if error occurs
} 
catch (error) {
  // This block catches the error and prevents crashing
  console.log("Caught an error:", error.message);
}

//undefinedVar is not declared — it causes an error.

//2: Asynchronous Error Handling using File System

const fs = require('fs');

// Trying to read a file that might not exist
fs.readFile('exist.txt', 'utf8', (err, data) => {
  if (err) {
    // Error reading file, such as file not found
    console.error("File read error:", err.message);
    return;
  }

  // If no error, display file content
  console.log("File content:", data);
});
//fs.readFile() is asynchronous and uses a callback.
//If the file is missing, the error (err) will be handled inside the if (err) block.
//If no error, it proceeds to show the file content.

//3: Express Route with Custom

const express = require('express');
const app = express();

// Sample route to trigger an error manually

app.get('/cause-error', (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500; // Internal Server Error
  next(error); // Send error to the next middleware
});

//You manually create an error object with a message and HTTP status.
//next(error) sends it to the global error-handling middleware.

//4: Global Error Handler Middleware in Express
