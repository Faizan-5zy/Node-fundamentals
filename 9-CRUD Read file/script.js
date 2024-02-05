// CRUD 

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'14-crud')
const filePath = `${dirPath}/apple.txt`

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Create file 
// fs.writeFileSync(filePath,"This is a simple test file")

// Read file 
fs.readFile(filePath,'utf8',(err,item)=>{
console.log(item)
})
