# Basic Node.js HTTP Server

This is a simple example of creating an HTTP server in Node.js using the built-in `http` module. The server responds to incoming requests with a basic HTML message.

## Code Explanation

The main script `main.js` contains the following code:

```javascript
const http = require('http');

http.createServer((req, resp) => {
    resp.write('<h1>I am Faizan</h1>');
    resp.end();
}).listen(4500);
```
### Code Breakdown

- `const http = require('http');`: Imports the built-in `http` module, which provides functionality to create an HTTP server.

- `http.createServer((req, resp) => { ... }).listen(4500);`: Creates an HTTP server that listens on port `4500`. The server responds to each incoming request with the following:

  - `resp.write('<h1>I am Faizan</h1>');`: Writes a simple HTML message to the response stream. In this case, it's a heading saying "I am Faizan."

  - `resp.end();`: Indicates the end of the response stream, completing the response.

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Run the server:

   ```bash
   node main.js
   ```

   The server will be accessible at [http://localhost:4500](http://localhost:4500).

### Testing

Open your web browser and navigate to [http://localhost:4500](http://localhost:4500). You should see the message "I am Faizan" displayed on the page.
