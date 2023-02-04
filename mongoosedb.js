const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/dreamcoder";
mongoose.connect(url);

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  address: String,
});

// const express = require("express");
// const app = express();
// app.use(express.json());
const insertData =async ()=>{
    const student = mongoose.model('Students',studentSchema);
    let data = new student({
         name:"ramesh",
         class:"JS",
         address:"merta"
    });
    const resultsss = await data.save();
    console.log("=======dsdfsf===>",resultsss);
}
insertData()

// const updateData =async ()=>{
//     const student = mongoose.model('Students',studentSchema);
//     let data = await student.updateOne({name:"soyal"},{$set:{address:"jaipur"}})
//     console.log(data)
// }
// updateData();

// const deleteData =async ()=>{
//     const student = mongoose.model('Students',studentSchema);
//     let data = await student.deleteOne({name:"ramesh"})
//     console.log(data)
// }
// deleteData()

// const finddata = async function(){
//     const student = mongoose.model('students',studentSchema);
//     let data = await student.find({});
//     console.log(data[data.length-1]);
// }
// finddata();

// app.get('/',async(req,res)=>{
//     const student = mongoose.model('students',studentSchema);
//     let data = await student.find({});
//     console.log(data[data.length-1]);

//   res.send(data[data.length-1])
// })

// app.put('/:id',async(req,res)=>{
//     const student = mongoose.model('students',studentSchema);
//     let data = await student.updateOne({name:"gullu"},{$set:req.body});
//     console.log(req.body);

//   res.send(data)
// })

// app.put("/", async (req, res) => {
//   const student = mongoose.model("students", studentSchema);
//   let first = student[0];
//   let last = student[student.length - 1];
//   let data = await student.updateOne(
//     { name: first.name },
//     { $set: { name: last.name } }
//   );

//   res.send(data);
// });

// app.listen(4000);
