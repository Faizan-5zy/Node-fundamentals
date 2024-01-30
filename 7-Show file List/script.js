// Show file list 

// Make file in a folder 
// Use path Module 
// Get file names and point 



// creating and writing files 
const fs = require('fs')
const path = require('path')
const dirName = path.join(__dirname,'13-files')

// if dir not present create 
if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}


for(i=0;i<5;i++)
{
    console.log('i: ', i);
    fs.writeFileSync(path.join(dirName, `hello${i}.txt`), `this is apple file${i}`);
}

// Reading files 

fs.readdir(dirName,(err,files)=>{
    files.forEach((item)=>{
        console.log('file name is ',item)
    })
})

