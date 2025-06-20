//Read a File
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) return console.error('Read Error:', err);
  console.log('File Content:', data);
});

//write to a file
fs.writeFile('output.txt', 'Hello, Nithya!', (err) => {
  if (err) return console.error('Write Error:', err);
  console.log('File Written');
});

//Append to a file
fs.appendFile('output.txt', '\nAppended Text', (err) => {
  if (err) return console.error('Append Error:', err);
  console.log('Text Appended');
});

//Delete a File
fs.unlink('output.txt', (err) => {
  if (err) return console.error('Delete Error:', err);
  console.log('File Deleted');
});

//Rename a file
fs.rename('sample.txt', 'renamed.txt', (err) => {
  if (err) return console.error('Rename Error:', err);
  console.log('File Renamed');
});

//create directory
fs.mkdir('new-folder', (err) => {
  if (err) return console.error('Mkdir Error:', err);
  console.log('Directory Created');
});

//Remove directory
fs.rmdir('new-folder', (err) => {
  if (err) return console.error('Rmdir Error:', err);
  console.log('Directory Removed');
});

//read directory
fs.readdir('.', (err, files) => {
  if (err) return console.error('Readdir Error:', err);
  console.log('Files:', files);
});

//get file stats
fs.stat('renamed.txt', (err, stats) => {
  if (err) return console.error('Stat Error:', err);
  console.log('Stats:', stats);
});

//copy file
fs.copyFile('renamed.txt', 'copied.txt', (err) => {
  if (err) return console.error('Copy Error:', err);
  console.log('File Copied');
});

