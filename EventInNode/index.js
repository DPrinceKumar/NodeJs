const express = require('express');
const app = express();
const EventEmitter = require('events');
const event=new EventEmitter();

let count = 0;

event.on('emmitEvent',(req,res) => {
    count++;
    console.log(`Event emmiter called ${count} timers`);


})

app.get('/EventEmitter',(req,res)=>{
    res.send("event 1 in node js ")
    event.emit('emmitEvent');
});
app.get('/EventEmitter2',(req,res)=>{
    res.send("event 2 in node js ")
    event.emit('emmitEvent');
});
app.get('/EventEmitter3',(req,res)=>{
    res.send("event 3 in node js ")
    event.emit('emmitEvent');
});
app.get('/EventEmitter3',(req,res)=>{
    res.send("event 4 in node js ")
    event.emit('emmitEvent');
});

app.listen('5000',()=>{
    console.log('listening on port',5000);
});