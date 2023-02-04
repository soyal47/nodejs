const express = require("express");
const app = express();
require("../config");
const userschema = require("./userschema");
const {isValidForm,validators }= require('../helper');
app.use(express.json());

app.post("/sighup", async (req, res) => {
 const {email, name, password,monumber }=req.body
 const form={
  
  name: validators.checkRequire('name',name),
  email: validators.checkEmail('email',email),
  password: validators.checkPassword('password',password,8),
  monumber:validators.checkPhoneNumber('phone number', monumber,10),
 }
console.log(form);
if(form.name==null&&form.email==null){
  if(form.password==null&& form.monumber==null){
    let data = new userschema(req.body);
    let result = await data.save();
   res.send(result);
  }
}else{
res.send(form)
console.log(form)
}
});
app.listen(6000);






//sasta jugad  ..........

  // let email = req.body.email;
  // let emailerr = "";
  // if (email.includes("@gamail.com") == false) {
  //   emailerr = "please valid email";
  //   res.send(emailerr);
  // } else {
  //    let data = new userschema(req.body);
  //   let result = await data.save();
  //   res.send(result);
  //   console.log(result);
  // }