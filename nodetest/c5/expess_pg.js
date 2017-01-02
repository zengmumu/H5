/**
 * Created by admin on 2016/6/16.
 */
var  express=require("express");
var app=express();

app.use(express.static("public"));
var bodyParser=require("body-parser");
var urlencoded=bodyParser.urlencoded({ extended: false });

app.post("/pocess",urlencoded,function(req,res){
    var data={"uanme":req.body.uname,"ueamil":req.body.uemail}
    res.send(JSON.stringify(data));
})

app.get("/pocess",function(req,res){
    var data={"name":req.query.uname,"email":req.query.uemail}
    res.send(JSON.stringify(data));

})
app.listen(8080,function(){
    console.log("app启动完毕");
})
