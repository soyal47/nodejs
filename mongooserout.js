const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    name:String,
    class:String,
    address:String
});

module.exports= mongoose.model('data',productschema);