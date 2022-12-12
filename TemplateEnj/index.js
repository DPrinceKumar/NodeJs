const express= require("express")
const app= express();

/**name of engine , package name  */
/**
 * by default if we are using view engine we need to create a view
 * foilder so that it can acess view it's a by default configuration
 *
 * the file name contains the extension as "ejs"
 */
app.set('view engine',"ejs")

app.get("/profile",(_,resp)=>{
    // resp.send("working");
    const data={
        para:'this para is coming from ejs dynamiclly   '
    }
    resp.render('profile',{data})
});
app.listen(3005);