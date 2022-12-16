const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/nodeWithMongo");
module.exports = mongoose;