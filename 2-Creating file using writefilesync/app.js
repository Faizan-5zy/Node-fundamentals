// file system , creating file using writefilesync 
const fs = require('fs')
fs.writeFileSync('2-app.txt',"Hello world")

// to check directory name 
console.log('-->',__dirname)

// to check file name 
console.log('-->', __filename)

// core modules are by default features which we call modules 
// 2 types :- 
// global = which we need not import (console.log)
// non-global = which we need import (fileSystem , buffer)
