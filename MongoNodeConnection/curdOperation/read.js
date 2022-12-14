const dbConnect=require('../dbFromOtherFile/connection')

/**
 * two ways to handle promise
 * 1. using promise
 * 2. using async await
 */


// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })


const main=async ()=>{
    let data=await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}
main()