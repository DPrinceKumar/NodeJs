const dbConnect = require("../dbFromOtherFile/connection");

const deleteDb = async () => {
  const db = await dbConnect();
  //deleteone will deleteDb first instance and delete will return all the deleteDb
  const deleteData = await db.deleteMany({
    name: "prince and shalini ka baccha",
  });
  /**
   *
   *    { acknowledged: true, deletedCount: 0 }
   *
   */
  console.log(deleteData);

  if (deleteData.deletedCount==0) {
    let rso = ` acknowledged: ${deleteData.acknowledged} Total DELETED count: ${deleteData.deletedCount}`;
    console.log(rso,"No data to delete");
  } else {
    console.log("sucessfful");
  }
};

deleteDb();
