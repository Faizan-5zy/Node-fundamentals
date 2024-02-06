### File Operations in Node.js - Readme

The provided code demonstrates basic file operations in Node.js using the `fs` (File System) module. Here's an explanation:

### 1. Directory and File Path Setup:

- **`const fs = require('fs')`:**
  - Imports the Node.js `fs` module, which provides methods for interacting with the file system.

- **`const path = require('path')`:**
  - Imports the `path` module for working with file and directory paths.

- **`const dirPath = path.join(__dirname, '10-crud')`:**
  - Sets the `dirPath` variable to the directory path by joining the current directory (`__dirname`) with the directory name (`'10-crud'`).

- **`const filePath = `${dirPath}/apple.txt'`:**
  - Sets the `filePath` variable to the full path of the file (`'apple.txt'`) within the specified directory.

### 2. Directory Existence Check and Creation:

- **`if (!fs.existsSync(dirPath)) { fs.mkdirSync(dirPath); }`:**
  - Checks if the directory (`'10-crud'`) exists.
  - If not, creates the directory synchronously using `fs.mkdirSync(dirPath)`.

### 3. Update File Content:

- **`fs.appendFile(filePath, ' ,and file name is apple.txt', (err) => { ... });`:**
  - Appends the specified text to the content of the file (`'apple.txt'`) asynchronously.
  - The callback function is executed after the operation, logging a message based on success or failure.

### 4. Rename File:

- **`fs.rename(filePath, `${dirPath}/orange.txt', (err) => { ... });`:**
  - Renames the file from `'apple.txt'` to `'orange.txt'` asynchronously.
  - The callback function is executed after the operation, logging a message based on success or failure.

### Example Usage:

```javascript
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '10-crud');
const filePath = path.join(dirPath, 'apple.txt');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Update File Content
fs.appendFile(filePath, ' ,and file name is apple.txt', (err) => {
    if (!err) {
        console.log('File is updated');
    } else {
        console.error('File is not updated:', err);
    }
});

// Rename File
fs.rename(filePath, path.join(dirPath, 'orange.txt'), (err) => {
    if (!err) {
        console.log('Filename is updated');
    } else {
        console.error('Failed to rename the file:', err);
    }
});
```

This example demonstrates updating the content of a file and renaming the file, with appropriate messages logged based on the outcomes of these operations.
