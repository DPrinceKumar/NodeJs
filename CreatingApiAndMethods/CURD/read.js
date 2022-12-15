const express = require("express");
const app = express();
const dbConnect = require("../dbFromOtherFile/connection");

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
//   console.log("gggg",data);
  resp.send(data);
});
app.listen(3008);