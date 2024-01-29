# Node.js Command Line Utility

This Node.js script is a simple command line utility for performing file operations. It accepts commands as arguments and performs corresponding actions on files.

### Usage

1. **Display Command Line Arguments:**
   - Uncomment the line `console.log(process.argv)` to display all command line arguments passed to the script.

2. **Display Specific Argument:**
   - Uncomment and modify the lines `console.log(process.argv[n])` to display specific command line arguments, where `n` is the index.

3. **File Operations:**
   - The script supports two commands: `add` and `remove`.
   - To add content to a file, use the command:
     ```
     node script.js add <filename> <content>
     ```
   - To remove a file, use the command:
     ```
     node script.js remove <filename>
     ```

### Example

1. **Add Content to a File:**
   ```
   node script.js add example.txt "This is the content."
   ```
   This command adds the specified content to a file named `example.txt`.

2. **Remove a File:**
   ```
   node script.js remove example.txt
   ```
   This command removes the file named `example.txt`.

### File Operations Logic

- The script uses the `fs` (File System) module to perform file-related operations.
- If the command is `add`, it writes the specified content to the specified file.
- If the command is `remove`, it deletes the specified file.
- If the command is neither `add` nor `remove`, it prints "Invalid Entry."

### Notes

- Make sure to provide valid file paths and content when using the `add` command.
- The script does not handle errors such as invalid file paths or missing content.

### Running the Script

Execute the script by running the following command in the terminal:

```
node script.js <command> <filename> <content>
```

Replace `<command>`, `<filename>`, and `<content>` with the desired values.

### Explanation:

1. **Import the File System Module:**
   ```javascript
   const fs = require('fs');
   ```
   This line imports the Node.js built-in `fs` module, which provides file system-related functionality.

2. **Command Line Arguments:**
   ```javascript
   const input = process.argv;
   ```
   This line captures the command line arguments provided when running the script. `process.argv` is an array that contains the command line arguments.

3. **File Operations Logic:**
   ```javascript
   if (input[2] == 'add') {
       fs.writeFileSync(input[3], input[4]);
   } else if (input[2] == 'remove') {
       fs.unlinkSync(input[3]);
   } else {
       console.log("Invalid Entry");
   }
   ```
   - If the third command line argument (`input[2]`) is `'add'`, it uses `fs.writeFileSync` to write the content provided in `input[4]` to the file specified in `input[3]`.
   - If the third command line argument is `'remove'`, it uses `fs.unlinkSync` to delete the file specified in `input[3]`.
   - If the third command line argument is neither `'add'` nor `'remove'`, it prints "Invalid Entry" to the console.

### Usage Examples:

1. **Add Content to a File:**
   ```bash
   node script.js add example.txt "This is the content."
   ```
   This command adds the specified content to a file named `example.txt`.

2. **Remove a File:**
   ```bash
   node script.js remove example.txt
   ```
   This command removes the file named `example.txt`.

3. **Invalid Entry:**
   If the provided command is neither `'add'` nor `'remove'`, it prints "Invalid Entry."
