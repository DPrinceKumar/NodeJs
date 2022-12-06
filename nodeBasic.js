/*
 *============================================================CHILD PROCESS
 *
 * FOR CHROME ---->>> START
 * FOR VSCODE ---->>> CODE || .
 * FOR CAL    ---->>> CALC
 */

// let cp=require('child_process');
// let file = cp.execSync("node basic_for_node.js");
//console.log('log is '+file);



/**
 *============================================================FOR OS
 */
//let os=require("os");
//console.log(os.platform());

/**
 *============================================================FOR FILE
 */

// let fs=require('fs');
// fs.openSync('demo.js','w');
// fs.writeFileSync("demo.js", "demo file is created and written in that");
// fs.appendFileSync("demo.js", " appended with append file sync");
// fs.rmSync("jj")

// for( let i =1;i<=10;i++){
//     let dir=`Lacture-${i}`;
//     fs.rmdirSync(dir);
// }


/**
 *=========================================================CREATING FIRST SERVER OF THIS PROJECT
 */
const http=require("http");
// http.createServer((req,resp)=>{
//     resp.write("<b>First server working</b>");
//     resp.end()
// }).listen(3000);

/**
 * CREATING FIRST API
 */
const data=require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200);
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(3001);