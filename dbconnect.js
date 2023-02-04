const { MongoClient }= require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);


const getdata=async(databassname, collectionname)=>{
    await client.connect();
    console.log('conet succes');
    const db= client.db(databassname);
    const collection=db.collection(collectionname);
    return collection;
}
 
module.exports= getdata
