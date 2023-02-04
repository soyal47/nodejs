// const http=require('http');
// const input =process.argv;
// http.createServer((req,res)=>{
//     res.write(JSON.stringify(obj))
//     res.end()
// }).listen(3000);
// let obj= {
//     name : input[2],
//     email: input[3],
//     add : input[4]
// }
// console.log(obj);
 
//asychronous  

console.log("hello");
let b = 5;
let a=0;
let waitdata = new Promise((resole, reject)=>{
    setTimeout(()=>{
        resole(10);
    },3000)
})
waitdata.then((b)=>{
    
    console.log("===>",a+b);

});
console.log("soyal khan");