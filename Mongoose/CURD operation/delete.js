const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/nodeWithMongo");

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  "fev person": {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const deleteFromDb = async () => {
  const deleteData = await mongoose.model("DemoSchema", nameSchema);
  let data = await deleteData.deleteOne( {name: "plkl"});
  //   const result = await data.save();
  console.log(data);
};
//deleteFromDb();
