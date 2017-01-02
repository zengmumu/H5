var express=require("express");
var app=express();
app.use(express.static("public"));
app.get("/process",function(req,res){
    response={
        name:req.query.uname,
        email:req.query.uemail
    }
    res.end(JSON.stringify(response));
})
app.listen(8080,function(){
    console.log("服务器启动成功");
})

