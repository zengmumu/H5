/**
 * Created by admin on 2016/6/16.
 */
var  express=require("express");
var app=express();
    app.use(express.static("public"));
app.get("/pocess",function(req,res){
    var data={"name":req.query.uname,"email":req.query.uemail}
    res.send(JSON.stringify(data));

})
app.listen(8080,function(){
    console.log("app启动完毕");
})
