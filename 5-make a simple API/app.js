// Make a simple API 

// Make a server
// create header and API body 
// Create an API with static data
// Put data in other file 

console.log('simple API:');

const data = require('./5-data')

const http = require('http')

http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'})
resp.write(JSON.stringify(data))
resp.end()
}).listen(5000)
