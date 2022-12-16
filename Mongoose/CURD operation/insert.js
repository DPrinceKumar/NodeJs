/**
 * basic requriment for CURD using mongoose in node.js
 * 1. import mongoose from 'mongoose';
 * 2. make executable of that mongoose;
 * 3. create schema of the dartabsse ;
 * 4. create model which will use mongoose schema for anu curd operation
 * 5. Now peform the CURD which you want to perform
 * 6. save data (optional)
 *
 */


const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/nodeWithMongo");

const nameSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    'fev person':{
        type: String,
        required: true
    },
    phone: {
        type:Number,
        required: true
    }
});

const insertInDB=async () => {
    const nameEntry = await mongoose.model("DemoSchema", nameSchema);
    let data=new nameEntry({name:"plkl",'fev person':'shalini ke papa',phone:112312312});
    const result =await data.save();
    console.log(result);

}
insertInDB();