const express = require("express");
const app = express();
const dbConnect = require("./dbFromOtherFile/connection");
const mongo= require("mongodb");
app.use(express.json());


/**
 * 1. GET /api/
 * 2. POST /api
 * 3. PUT /api
 * 4. DELETE /api
 */


/**
 * 1. GET /api/
 */
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  //   console.log("gggg",data);
  resp.send(data);
});

/**
 * 2. POST /api
 * INSERING DATA using the POST method
 * Steps:
 * 1. Go to body
 * 2. provide nessary parameters
 * 3. Click send button
 * you will receive data from the server and you can use request.body to see data.
 */
// app.post("/", async (req, resp) => {
//   let input = await dbConnect();
//   let result = await input.insertOne(req.body);
//   resp.send(result);
// });
/**
 * DELETING  DATA
 */

// app.post("/", async (req, resp) => {
//   let input = await dbConnect();
//   let result = await input.deleteOne(req.body);
//   resp.send(result);
// });

/**
 * UPDATING DATA
 */
// app.post("/", async (req, resp) => {
//   let input = await dbConnect();
//   let result = await input.updateOne(req.body);
//   resp.send(result);
// });


/**
 * 3. PUT /api
 *
 * inserting a new item in the database
 *
 * Steps:
 * 1. Go to body
 * 2. provide nessary parameters
 * 3. Click send button
 * you will receive data from the server and you can use request.body to see data.
 */


/**
 * this is just for getting data from postman server
 */
// app.put("/",(req,resp) =>{
//   console.log(req.body);
//   resp.send({result:"Updated"})
// });

/**
 * TO insert data using put method
 */
// app.put("/",async(req,resp) =>{
//   let data = await dbConnect();
//   let response=await data.insertOne(req.body);
//   resp.send(response);

// })

/**
 * TO update data using put method
 *
 * Method 1
 */
app.put("/",async(req,resp) =>{
  let data = await dbConnect();
  let response =await data.updateMany(
    { name: "Roshan Kumar" },
    { $set: { "fev person": "shalz" } }
  );
  console.log(response);
  resp.send({result:"update"});
})

/**
 * TO update data using put method
 *
 * Method 2
*/

app.put("/:name",async(req,resp) =>{
  let data = await dbConnect();
  let response =await data.updateMany(
    { name: resp.params.name },
    { $set: resp.body.name }
  );
  resp.send({result:"update"});
})

/**
 * 4. DELETE /api
 *
 */

app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let response = await data.deleteOne({_id:new mongo.ObjectId(req.params.id)});
  resp.send({result:"delete"})
});


app.listen(3008);
