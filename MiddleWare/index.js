const express=require("express")
const middleware=require("./middleware/middleware")
const app=express();
const routes=express.Router();

/**
 *  Default app routes
 *
 */
app.get("/", (_, resp) => {
  resp.send("Working fine");
});

/**
 * for grouping all the routes together
 *
 * now replace app with routes to all the routes which you wanted to be
 * grouped middleware together
 */
routes.use(middleware);
routes.get("/groupedMiddleWare", (_, resp) => {
  resp.send("users groupedMiddleWare fine");
});

routes.get("/gmw", (_, resp) => {
  resp.send("users gmw fine");
});

routes.get("/gmw3", (_, resp) => {
  resp.send("users gmw3 fine");
});

/**
 * same render filer is applied to all router
 * weather we wanteed  it to be applied or not
 * it is applied to all
 *
 * => so there comes a concept of grouped routing
 *
 * =================THIS IS APPLICATION LEVEL MIDDLE WARE WHICH IS APPLIED TO ALL ROUTE===================
 */
 let renderFilter=(req,resp,nextTask)=>{
    if (!req.query.age) {
      resp.send("please provide age");
    } else if (req.query.age < 18) {
      resp.send("Chotu");
    }else if (req.query.age > 18) {
      resp.send("bade log");
    }
    else {
      nextTask();
    }
  }
// app.use(renderFilter);
app.get("/users", (_, resp) => {
  resp.send("users Working fine");
});

//======================Application middleware ends==========================================
/**
 *
 * SO TO IMPLIMENT ==========SINGLE MIDDLEWARE======== TO SINGE ROUTER
 * REMOVE APPLICATION LEVEL MIDDLEWARE
 *
 * apply the middleware were we wanted to get ROUTER LEVEL MIDDLEWARE
 */


app.get("/about",renderFilter, (_, resp) => {
  resp.send("about Working fine");
});
app.use('/',routes);
app.listen(3006);
