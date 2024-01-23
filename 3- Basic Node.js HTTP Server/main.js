// Creating a basic server , function as a parameter , Arrow function , get output on Browser
const http = require('http')

http.createServer((req,resp)=>{
    resp.write('<h1>Iam Faizan</h1>')
    resp.end()
    }
).listen(4500)
