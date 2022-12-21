const express=require('express');
const multer=require('multer');
const app = express();
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"upload");
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now().toString()+".jpg");
        }
    })
}).single('FileUploadByUser');
app.post("/postingFile", upload,(req, res) => {
  res.send("Working with callback");
});
app.listen(3003);