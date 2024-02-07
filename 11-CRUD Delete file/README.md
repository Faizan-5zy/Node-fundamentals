### File Deletion in Node.js - Readme

The provided code demonstrates file deletion in Node.js using the `fs` (File System) module. Here's a short explanation:

### 1. Directory and File Path Setup:

- **`const fs = require('fs')`:**
  - Imports the Node.js `fs` module, which provides methods for interacting with the file system.

- **`const path = require('path')`:**
  - Imports the `path` module for working with file and directory paths.

- **`const dirPath = path.join(__dirname, '11-crud')`:**
  - Sets the `dirPath` variable to the directory path by joining the current directory (`__dirname`) with the directory name (`'11-crud'`).

- **`const filePath = `${dirPath}/orange.txt'`:**
  - Sets the `filePath` variable to the full path of the file (`'orange.txt'`) within the specified directory.

### 2. Directory Existence Check and Creation:

- **`if (!fs.existsSync(dirPath)) { fs.mkdirSync(dirPath); }`:**
  - Checks if the directory (`'11-crud'`) exists.
  - If not, creates the directory synchronously using `fs.mkdirSync(dirPath)`.

### 3. File Deletion:

- **`fs.unlinkSync(`${dirPath}/orange.txt')`:**
  - Deletes the file named `'orange.txt'` within the specified directory synchronously using `fs.unlinkSync`.
  - If the file does not exist, it does not throw an error; it simply does nothing.

### Example Usage:

```javascript
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '11-crud');
const filePath = path.join(dirPath, 'orange.txt');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Delete File
fs.unlinkSync(path.join(dirPath, 'orange.txt'));

// Note: If 'orange.txt' does not exist, the function does nothing.
```

This example demonstrates the deletion of the file named `'orange.txt'` within the specified directory. If the file exists, it is deleted; otherwise, no error is thrown.
