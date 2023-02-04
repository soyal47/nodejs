const express = require('express');
const app = express();
// const data = require('./data')
const fun = require("./data")
// app.get('',(req,res)=>{
// //    req.send( data=req.query.name);
// let a=data.filter((value,index)=>{
//     return value.name==req.query.name
// })
//     res.send(a);
// // })
// app.listen(3000);
// console.log(data);

fun();

