const mongoose = require('mongoose');
const main=async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/nodeWithMongo");
    const ProductSchema=new mongoose.Schema({
        name:String,
        "fev person":String
    });
                                        //Database Name, Schema
    const ProductsModel=mongoose.model('modelProduct',ProductSchema);
    let data=new ProductsModel({name:"ferzi Data","fev person":"dupModel",pers:"kkk"});
    let result=await data.save();
    console.log(result);
};
main();