const express = require('express');
const app = express();
app.use(express.json());
require('./config')
const product = require('./mongooserout')


// app.post('/creat',async (req,res)=>{
//    let data1 = new product(req.body);
//    let result =await data1.save();
//     console.log(result);
//     res.send(result);
// });


// app.put('/update/:_id', async (req, res) => {
//     console.log("==========>iddd", req.params)
//     let data = await Product.updateOne(req.params, { $set: req.body });
//     res.send(data);
//     console.log("====>data", data);
// })



// app.get('/search/:name', async (req, res) => {
//     let data = await Product.find({
//         "$or": [
//             { "name": { $regex: req.params.name } },
//             { "class": { $regex: req.params.name } },
//             { "address": { $regex: req.params.name } }

//         ]
//     });
//     res.send(data);
// })
app.delete('/delete/:_id', async (req, res) => {

    let data = await product.deleteOne(req.params);
    if (data.deletedCount) {
        res.send(data);
    }
    else {
        res.send("Recored note Found");
    }

})
// app.delete('/LastIndexDelete', async (req, res) => {
//     let Alldata = await Product.find();
//     let obj = Alldata[Alldata.length - 1]
//     let data = await Product.deleteOne({ "name": obj.name })
//     res.send(data)
//     console.log("======data===", data);
// })

app.listen(6000);