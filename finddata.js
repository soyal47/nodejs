const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'
// const database = 'dreamcoder'
const canation = new MongoClient(url);


 async function dbcontion(databasename,collectionname) {
    let result = await canation.connect();
    let db = result.db(databasename);
    let callation =  db.collection(collectionname);
return callation
}









module.exports = dbcontion;