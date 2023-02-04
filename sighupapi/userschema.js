const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    monumber:String
});

module.exports= mongoose.model('data',productschema);