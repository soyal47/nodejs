const fs =require('fs');
const path = require('path');
const pathname = path.join(__dirname,"curd");
console.log("====>",pathname);
const filepath =pathname + '/abc.txt'
// fs.writeFileSync(filepath ,'this is a test file');

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log('===>',item);
// })

// fs.appendFile(filepath,' this is appendfile method',(err)=>{
//     if(!err) console.log("file is updated");
// })

fs.unlinkSync(filepath);