module.exports= renderFilter=(req,resp,nextTask)=>{
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