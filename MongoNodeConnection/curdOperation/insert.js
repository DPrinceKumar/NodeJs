const dbConnect = require("../dbFromOtherFile/connection");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    { name: "prisha", phone: 123456789, "fev person": "you" },
    { name: "Shalz", phone: 134, "fev person": "i" },
    { name: "pqr", phone: 456, "fev person": "my" },
    { name: "abc", phone: 789, "fev person": "myself" },
  ]);
  /**
   * result will come with all this result promise when insert is called
     * {
        acknowledged: true,
        insertedCount: 1,
        insertedIds: { '0': new ObjectId("636dea92e974230852c41f9e") }
        }
     */
  console.log(result);
  if (result.acknowledged) {
    let rso = ` acknowledged: ${result.acknowledged} Total inserted count: ${result.insertedCount}`;
    console.log();
  } else {
    console.log("Un sucessfful");
  }
};

insert();
