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

const readFromDB = async () => {
  const readData = await mongoose.model("DemoSchema", nameSchema);
  let data = await readData.find({});
  //   const result = await data.save();
  console.log(data);
};
readFromDB();
