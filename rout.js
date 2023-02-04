const express = require('express');
const app = express(); 

app.set('view engine','ejs')
const arr =[
    {name:'soyal',class:'node',add:'roon'},
    {name:'sameer',class:'node',add:'roon'},
    {name:'gulzar',class:'node',add:'roon'},
    {name:'vajeer',class:'node',add:'roon'},
    {name:'mustak',class:'react',add:'roon'},
    {name:'faiz',class:'node',add:'roon'},
    {name:'aaryan',class:'node',add:'roon'},
    {name:'arhan',class:'node',add:'roon'},
    {name:'rohan',class:'node',add:'roon'},
    {name:'zayn',class:'node',add:'roon'},
];
app.get('/login',(req,res)=>{
    res.render("login",{arr})
})
app.listen(5000)