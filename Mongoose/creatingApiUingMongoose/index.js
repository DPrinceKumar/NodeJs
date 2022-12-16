require("./config/connection");
const express = require("express");
const nameCreation = require("./config/nameSchema");
const app = express();

//middleware to convert to json format
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new nameCreation(req.body);
  let result = await data.save();
  res.send(result);
  // console.log(result);
});
app.get("/get", async (req, res) => {
  let data = await nameCreation.find();
  res.send(data);
});
app.delete("/delete", async (req, res) => {
  let data = req.body;
  console.log(data);
  let delte = await nameCreation.deleteOne(req.body);
  res.send(data);
});

app.put("/put", async (req, res) => {
  let data = await nameCreation.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.get("/searchApi/:key", async (req, res) => {
  let data = await nameCreation.find({
    $or: [
      { name: { $regex: req.params.key } },
      { "fev person": { $regex: req.params.key } },
    ],
  });
  res.send(data);
  console.log(req.params.key);
});
app.listen(5000);
