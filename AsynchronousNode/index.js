/**
 * PROBLEM WITH ASYNCHRONOUS PROGRAMMING
 */

// let a = 10;
// let b = 0;

// console.log("work1");

// setTimeout(() => {
//   b = 20;
//   console.log("LATE DATA COMING " + a + b);
// }, 1000);

// console.log(a + b);

/**
 * SOLUTION OF ASYNCHROMOUS PROGRAMMING
 * IS TO USE PROMMISE
 */
console.log("Resolving using promises \n");
let a1 = 10;
let b2 = 0;

console.log("work1");

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
    console.log("promise DATA COMING " + a1 + b2);
  }, 3000);
});
waitingData.then((resolveData) => {
  console.log(a1 + resolveData);
});
