const mongoose = require('mongoose');
const nameSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    'fev person':String
});
module.exports =mongoose.model('demoschema',nameSchema);