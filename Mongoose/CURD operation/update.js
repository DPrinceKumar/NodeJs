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

const updateInDB = async () => {
  const updateEntry = await mongoose.model("DemoSchema", nameSchema);
  let data = await updateEntry.updateOne(
    { name: "plkl" },
    {
      $set: {
        phone: 7254962644,
        "fev person": "shalini",
      },
    }
  );
//   const result = await data.save();
  console.log(data);
};
updateInDB();
