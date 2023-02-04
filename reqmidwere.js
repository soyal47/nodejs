module.exports = reqmidderwere =(req,res,Next)=>{
    if(!req.query.age){
        res.send("please enter the age")
    }
   else if(req.query.age >= 18){
        res.send("age is valid")
    }
    else if(req.query.age<18){
        res.send("age is invalid")
    }
    else{
        Next();
    }
}
