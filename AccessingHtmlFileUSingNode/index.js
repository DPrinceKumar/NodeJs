const express = require("express");
const app = express();

/**
 * for acessing file using node-----------html file
 */
const path=require("path");
const publicPath=path.join(__dirname,'public');
//console.log(__dirname);   //it will give you the directory name with full path
console.log("path: ",publicPath);

// for static path
/**
 * This is a built-in middleware function in Express. It serves static files and is based on serve-static.
 */
app.use(express.static(publicPath))

//to avoide mentioning extenction of file in search query
app.get("/", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`)
});

app.get("/route1", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});
//Error page
app.get("*",(_,resp)=>{
    resp.sendFile(`${publicPath}/error.html`)
})
app.listen(3004);