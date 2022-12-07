/**
 * TAKING TERMIN ARGS FOR CREATING FILE AND DELETING IT
 */
// console.log(process.argv[2])
// const fs=require('fs')
// const inputString=process.argv;

// if (inputString[2]=='add') {
//     fs.writeFileSync(inputString[3],inputString[4])
// }else if(inputString[2]=='remove'){
//     fs.unlinkSync[3]
// }
//  else {
//     console.log('Invalid');
// }

/**
 * PATH
 */
const path=require('path');
// console.log(path);
const dirPath=path.join(__dirname);
console.log(dirPath);