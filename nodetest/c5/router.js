var express=require("express");
var app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("hello 我是get 方法的首页");

})
app.get("/list",function(req,res){
    res.send("hello list");

})
app.get("/ab*",function(req,res){
    res.send("正则匹配的页面");

})
app.post("/",function(req,res){
    res.send("post 请求页面");

})
app.delete("/",function(req,res){
    res.send("delete 请求页面");

})
app.listen(8080,function(){
    console.log("程序执行启动");
})

