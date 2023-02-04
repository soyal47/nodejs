const express =require('express');
const app = express();
const reqmidderwere =require('./reqmidwere')
const route =express.Router(reqmidderwere);

route.use(reqmidderwere);

route.get('',(req,res)=>{
    res.send("this is home page")
})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})
app.use('/',route);
app.listen(3000);