var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("hello 大家好，express node");
});
app.listen(8080,function(){
    console.log("app 启动完毕");
})
