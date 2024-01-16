# Node.js Module Exports Example

## Overview

This repository provides a simple example demonstrating the use of module exports in Node.js to import functions and variables between different files.

## Project Structure

- **main.js**: The main file where functions and variables from `1-app.js` are imported.
- **1-app.js**: The file exporting an object containing variables (`x` and `y`) and a function (`z`) using `module.exports`.

## Explanation

### main.js

The `main.js` file imports functions and variables from `1-app.js` using the `require` statement in Node.js.

```javascript
// import functions and variables from other file 
const app = require('./1-app');

console.log('app: ', app);
console.log('app.y: ', app.y);
console.log('app.z(): ', app.z());
```

### 1-app.js

The `1-app.js` file exports an object containing variables (`x` and `y`) and a function (`z`) using `module.exports`.

```javascript
// 1-app.js

module.exports = {
  x: 10,
  y: 20,
  z: function () {
    return "hai";
  }
};
```

## Output

When you run `main.js`, you will see the following output in the console:

```bash
app:  { x: 10, y: 20, z: [Function: z] }
app.y:  20
app.z():  hai
```

This output confirms that the variables and function from `1-app.js` have been successfully imported into `main.js`.

