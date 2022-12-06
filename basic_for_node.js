console.log('Day-1');

/**
 * object
 */
let cap={
    name:"CaptionAmerica",
    age:100,
    address:{
        city:'pqr',
        state:'xyz'
    },
    isAvenger:true,
    movies:["First Avenger", "Winter Solder","Civil War"],
    sayHi:()=>{
        return "Hello I am caption America";
    },
}

/**
 * Get the objects
 */
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[2]);
// console.log(cap.sayHi());

/**
 * set the object
 *
 */

// console.log('Cap: ',cap);
// cap.age=400;
// cap.isAvenger=false;
// cap.friends=["Tony","ccc","fff"];
console.log('**********************************');

/**
 * delete
 */

// delete cap.address

// console.log("cap : ",cap);


/**
 *
 * loop
 *
 */

for(let obj in cap){
    // console.log(`${obj}:${cap[obj]}`);
    console.log(cap[obj]);
}