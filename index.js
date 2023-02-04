// const http=require('http');
// const data = require('./data');
// http.createServer((req,res)=>{
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(5000);

// // let name = "gullu";

// // const a = data.filter((value,index,Array)=>{
// //     return value.name==name;
// // })

// console.log(data);



// const fs=require('fs');
// const input =process.argv;
// if(input[2]== "add"){
// fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]== "remove"){
//     fs.unlinkSync(input[3]);
// }
// else{
// console.log("====",input);
// // }
// const http = require('node:http'); 
// const data = require('./data');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(JSON.stringify(data[2]));
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
