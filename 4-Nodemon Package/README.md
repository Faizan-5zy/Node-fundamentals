# Nodemon Package

The Nodemon package is a utility for Node.js that helps automate the process of restarting your Node application whenever changes are detected in your files. This is particularly useful during development, as it saves you the hassle of manually stopping and restarting your Node server every time you make code modifications.

## Installation

To install Nodemon globally, use the following npm command:

```bash
npm install -g nodemon
```

The `-g` flag ensures that Nodemon is installed globally, allowing you to use it across different projects.

## Usage

Once installed, you can use Nodemon to run your Node.js application. Instead of using the `node` command, use `nodemon` followed by the name of your main application file. For example:

```bash
nodemon app.js
```

Here, `app.js` is the entry point of your Node.js application.

Nodemon will monitor the files in your project and automatically restart the server whenever it detects changes, making the development workflow more efficient.

## Example

Consider the following simple Node.js script in a file named `index.js`:

```javascript
console.log('hai nodemon');
```

To run this script using Nodemon, execute the following command:

```bash
nodemon index.js
```

Now, every time you save changes to the `index.js` file, Nodemon will automatically restart the Node.js application, reflecting the modifications without manual intervention.

## Conclusion

Nodemon is a valuable tool for Node.js developers, enhancing the development experience by eliminating the need for manual server restarts. It is particularly useful in scenarios where continuous code changes are made during the development phase. Install Nodemon globally, use it to run your Node.js applications, and enjoy an efficient and automated development workflow.
