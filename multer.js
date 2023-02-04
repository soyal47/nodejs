const express =require('express');
const app = express();
const multer = require('multer');


const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"images")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname +"-"+Date.now()+".jpg")
        }
    })
}).single("data")

app.post('/',upload,(req,res)=>{
    res.send("done");
})
app.listen(5000)