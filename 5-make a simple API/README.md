# Simple API

This project demonstrates the creation of a simple API server using Node.js that serves static data. The API is built using the native `http` module in Node.js.

## API Details

### Endpoint

- **GET /api/data**

### Headers

The server responds with the following headers:

- **Content-Type**: `application/json`

### Response

The response will contain a JSON representation of static data.

## Static Data

The static data is stored in a separate file `5-data.js`. Modify this file to update the data served by.

```javascript
// Importing the 'data' module
const data = require('./5-data');

// Importing the 'http' module
const http = require('http');

// Creating an HTTP server
http.createServer((req, resp) => {
  // Setting the response header to indicate JSON content
  resp.writeHead(200, { 'Content-Type': 'application/json' });

  // Writing the JSON data to the response body
  resp.write(JSON.stringify(data));

  // Ending the response
  resp.end();
}).listen(5000);
```

Explanation:

1. **Importing Modules:**
   - `const data = require('./5-data');`: Imports the 'data' module, which presumably contains the data you want to serve through the API.
   - `const http = require('http');`: Imports the 'http' module for creating an HTTP server.

2. **Creating an HTTP Server:**
   - `http.createServer((req, resp) => {...});`: Creates an HTTP server. The provided callback function is executed whenever a request is received.
   - `(req, resp) => {...}`: Arrow function handling the request and response.

3. **Setting Response Header:**
   - `resp.writeHead(200, { 'Content-Type': 'application/json' });`: Sets the HTTP response header. In this case, it indicates that the content type is JSON.

4. **Writing Response Body:**
   - `resp.write(JSON.stringify(data));`: Writes the JSON representation of the data to the response body.

5. **Ending the Response:**
   - `resp.end();`: Ends the response, indicating that all response data has been sent.

6. **Listening on Port:**
   - `.listen(5000);`: Specifies that the server should listen on port 5000.

When you run this script, it creates an HTTP server that, upon receiving a request, responds with a JSON representation of the data from the 'data' module, setting the appropriate headers.
