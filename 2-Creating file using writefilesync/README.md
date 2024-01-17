## File System Operations in Node.js

This simple Node.js script demonstrates basic file system operations, specifically the creation of a file using the `writeFileSync` method. Additionally, it includes examples of retrieving the current directory (`__dirname`) and the current file name (`__filename`).

### Getting Started

To run this script, make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository or download the script file (`app.js`).
2. Open a terminal and navigate to the directory containing the script.

### Running the Script

Execute the following command in the terminal:

```bash
node app.js
```

### Understanding the Script

#### File Creation using `writeFileSync`

```javascript
const fs = require('fs');
fs.writeFileSync('2-app.txt', 'Hello world');
```

This section uses the Node.js `fs` (file system) module to create a file named `2-app.txt` and write the text "Hello world" into it. The `writeFileSync` method is a synchronous operation that ensures the file is written before moving on to the next line of code.

#### Checking Directory and File Names

```javascript
console.log('-->', __dirname);
console.log('-->', __filename);
```

These lines output the current directory (`__dirname`) and the current file name (`__filename`). `__dirname` holds the path of the directory in which the currently executing script resides, while `__filename` contains the absolute path of the current script file.

### Note on Core Modules

In Node.js, core modules are features that come pre-packaged with the runtime. There are two types:

1. **Global Core Modules**: These are available globally, and you don't need to import them explicitly (e.g., `console.log`).

2. **Non-Global Core Modules**: These require explicit importation (e.g., `fs`, `buffer`). You can import them using the `require` keyword.
