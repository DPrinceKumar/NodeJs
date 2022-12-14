const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/nodeWithMongo";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db("nodeWithMongo");
  return db.collection("firstCollections");
}
module.exports=dbConnect