// import functions and variables from other file 
const app = require('./1-app')

console.log('app: ', app);
console.log('app: ', app.y);
console.log('app: ', app.z());

// interview question

let arr=[2,3,6,4,7,5,3]
let result = arr.filter((item)=>{
    // return item
    // return item==3
    return item>3
})
console.log('result',result)