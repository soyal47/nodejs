const express = require('express');
const getdata = require('./dbConnect');
const app = express(); 
app.get('/student',async(req,res)=>{
   let datas = await getdata('student','data');
   let finddata= await datas.find({}).toArray()
   console.log("=====>",finddata);
   res.send(finddata)

   
})
app.get('/employ',(req,res)=>{
    res.send("emp")
})
app.listen(3000)

