const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '8-crud');
const filePath = path.join(dirPath, 'apple.txt');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Create file 
fs.writeFileSync(filePath, "This is a simple test file");

console.log("File created or updated successfully!");
