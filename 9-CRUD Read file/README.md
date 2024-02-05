# README: CRUD Operations with Node.js
The provided code reads the content of a file using the `fs.readFile` method. Here's an explanation of the code:

### Code Explanation

1. **File System Module:**
   - The `fs` module in Node.js provides methods for interacting with the file system.

2. **Path Module:**
   - The `path` module is used to manipulate file paths.

3. **Directory and File Paths:**
   - `dirPath` is set to the directory path using `path.join(__dirname, '9-crud')`.
   - `filePath` is set to the full path of the file (`apple.txt`) within the specified directory.

4. **Directory Existence Check:**
   - `fs.existsSync(dirPath)` is used to check if the directory (`9-crud`) exists.
   - If the directory doesn't exist, it is created synchronously using `fs.mkdirSync(dirPath)`.

5. **Read File:**
   - `fs.readFile(filePath, 'utf8', (err, item) => { ... })` reads the content of the file asynchronously.
   - The `'utf8'` encoding is specified to interpret the file content as a UTF-8 encoded string.
   - The callback function is executed when the file reading is complete. It takes two parameters: `err` (potential error) and `item` (the content of the file).

6. **Console Output:**
   - The content of the file is logged to the console.

### Example Usage

```javascript
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '9-crud');
const filePath = path.join(dirPath, 'apple.txt');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

fs.readFile(filePath, 'utf8', (err, item) => {
    if (err) {
        console.error("Error reading the file:", err);
    } else {
        console.log("File content:", item);
    }
});
```

This example reads the content of the specified file asynchronously and logs it to the console. Error handling is included to address potential issues during file reading.
