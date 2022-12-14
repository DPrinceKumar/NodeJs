/**
 * 1. from mongo 6 there is no mongo shell
 * 2. if we want mongo shell then we have to either install it from their site
 *                                    OR
 *        we can use the mongosh shell in mongodb compass
 *
 * 3. TO TEST MONGO IS ISTALLED PROPERLY
 *          mongod --version            -----this will return some version of mongo
 *
 * 4. TO CHECK MONGOSH SHELL DB
 *          show dbs    || show databases
 *          db // prints the current database
 *
 * 6. TO CRETE DATABSE
 *          use nodeWithMongosh  -----------------       switched to db 'nodeWithMongosh'
 *
 * 5. TO CREATE COLLECTION  name of collection
 *          db.createCollection("FirstCollection")
 *
 * 6. TO INSERT DATA ONE BY ONE
 *          db.firstCollections.insertOne({name:"Prince Kumar",phone:7254962644,"fev person":"Shalz"})
 *
 * 7. TO INSERT MANY
 *          db.FirstCollections.insertMany([])
 *
 * 8. To delete one
 *          db.FirstCollections.deleteOne({})       ||   db.FirstCollections.deleteMany([])
 *
 * 9. To update one
 *          db.firstCollections.updateOne({name:"Prince Kumar"},{$set:{"fev person":"I Me Myself"}})
 */

const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/nodeWithMongo";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db("nodeWithMongo");
  let collection = db.collection("firstCollections");
  let data = await collection.find({}).toArray();
  console.log("Data: ",data);
}

getData()