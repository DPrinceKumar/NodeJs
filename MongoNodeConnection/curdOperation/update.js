const dbConnect = require("../dbFromOtherFile/connection");
const update = async () => {
  const db = await dbConnect();

    //updateone will update first instance and update will return all the update
  const update = await db.update(
    { name: "prisha" },
    { $set: { name: "prince and shalini ka baccha", phone: 123 } }
  );
  /**
     *
    * { acknowledged:true,
    *   modifiedCount:9,
    *   upsertedId:null,
    *   upsertedCount:0,
    *   matchedCount:9 }
    *
   */
  console.log(update);

  if (update.acknowledged) {
    let rso = ` acknowledged: ${update.acknowledged} Total update count: ${update.upsertedCount}`;
    console.log(ros);
  } else {
    console.log("Un sucessfful");
  }
};

update();
