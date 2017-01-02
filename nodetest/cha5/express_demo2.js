var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("hello，GET Home");
})
app.post("/",function(req,res){
    res.send("hello，Post Home");
})
app.delete("/",function(req,res){
    res.send("删除内容");
})
app.get("/list",function(req,res){
    res.send("列表页面");
})
app.get("/abc*cd",function(req,res){
    res.send("匹配正则页面");
})
app.listen(8080,function(){
    console.log("应用启动完毕");
})