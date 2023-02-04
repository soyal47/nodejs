//  const express = require('express');
// const app = express(); 
// const { MongoClient }= require('mongodb');
// const url = 'mongodb://127.0.0.1:27017'
// const client = new MongoClient(url)
// const dbname='student'
// const dbname1= 'dreamcoder'



// let data;
// const getdata=async()=>{
//     await client.connect();
//     console.log('concted for succesfully to server');
//     const db = client.db(dbname);
//     const collection = db.collection('data');
//     const findresult = await collection.find({}).toArray();
//     console.log('======findresult====',findresult)
//     data=findresult
    
// }
// getdata();

// let data1;
// const getdata1=async()=>{
//     await client.connect();
//     console.log('concted for succesfully to server');
//     const db = client.db(dbname1);
//     const collection = db.collection('students');
//     const findresult = await collection.find({}).toArray();
//     console.log('======findresult====',findresult)
//     data1=findresult
// }
// getdata1();
// app.get('/student',async(req,res)=>{
//     await client.connect();
//     console.log('concted for succesfully to server');
//     const db = client.db(dbname);
//     const collection = db.collection('data');
//     const findresult = await collection.find({}).toArray();
//     console.log('======findresult====',findresult)
//     res.send(findresult);
// })

// app.get('/employ',async(req,res)=>{
//     await client.connect();
//     console.log('concted for succesfully to server');
//     const db = client.db(dbname1);
//     const collection = db.collection('students');
//   const findresult = await collection.find({}).toArray();
//      console.log('======findresult====',findresult)
//     res.send(findresult);
// })

// getdata1();
// app.get('/employ',async(req,res)=>{
//     res.send(data)
// })
// app.listen(3000)