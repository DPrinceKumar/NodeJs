const data=require('../data');

const express= require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(data);

})

app.get('/about',(req,res)=>{
    const name = req.query.name;
    res.send(`
        <input type="text" placeholder="Your Name"  />
        <button onclick='document.querySelector("input").value="${name}"'> Click Me</button>
        <button onclick='console.log("${name}")'> console Me</button>
        <a href="/">Go To Home</a>
    `);
})


app.listen(3003)