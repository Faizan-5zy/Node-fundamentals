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
// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item)
// })

// Update File 
fs.appendFile(filePath,' ,and file name is apple.txt',(err)=>{
    if(!err){
        console.log('file is updated')
    }else{
            console.log('file is not updated')
        }
    })
    
   
// Rename file 
    fs.rename(filePath , `${dirPath}/orange.txt`,(err)=>{
        if(!err){
        console.log('filename is updated')
    }
})
