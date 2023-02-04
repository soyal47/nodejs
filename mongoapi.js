const dbcontion = require('./finddata');
const express = require('express');
const mongodb = require('mongodb')
const app = express();
app.use(express.json())


// app.get('/:id', async (req, res) => {
//     let data = await dbcontion('admin', 'add') 
//     let result = await data.find({ _id: new mongodb.ObjectId(req.params.id) }).toArray()
//     res.send(result);
// })


// app.get('/', async (req, res) => {
//     let data = await dbcontion('dreamcoder', 'students')
//     let result = await data.find({}).toArray()

//     let data2 =   await dbcontion('student','data')
//     let result1 = await data2.find({}).toArray()

//     let arr=[];
//     arr.push(...result);
//     arr.push(...result1);
//     let data3 =   await dbcontion('admin','add')
//     let result2 = await data3.insertMany(arr)

//     res.send(result2);

// })
// app.listen(4000)







// app.post('/', async (req, res) => {
//     let data = await dbcontion('dreamcoder', 'students')
//     let result = await data.insertOne(req.body)
//     res.send(result)
// })

// app.put('/',async(req,res)=>{
//     let data = await dbcontion('dreamcoder', 'students')
//     let result = await data.updateOne({name:"harish"},{$set:req.body})
//     res.send(result)


// })

app.delete('/',async(req,res)=>{
    let data = await dbcontion('dreamcoder', 'students')
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.body.id) })
    let data1= await data.find({}).toArray()
    res.send(data1);
    console.log("done")
})
app.listen(4000)


// app.get('/', async (req, res) => {
//     let data = await dbcontion()
//     let result = await data.find({}).toArray();
//     res.send(result);
//     console.log(result)
// });





// const findsd = async () => {
//     let data = await dbcontion()
//     let result = await data.find().toArray()
//     // console.log(result);
// }
// findsd();





// const insert = async () => {
//     let data = await dbcontion()
//     let result = await data.insertMany([
//         { name: 'aslam', course: 'react-js', villege: "pbc" },
//         { name: 'ahsan', course: 'react-native', villege: "harsore" },
//         { name: 'babu', course: 'php', villege: "lalupure" }

//     ]);
// }

// const updates = async () => {
//     let data = await dbcontion()
//     let result = await data.updateOne({ name: "ahsan" },
//         { $set: { villege: "khunhkuna" } })

// }

// const deletes = async () => {
//     let data = await dbcontion()
//     let result = await data.deleteOne({ name: "moinudeen" })
// }

// deletes();
// // updates();
// // insert();
// app.listen(4000);