var express=require("express");
var app=express();
app.set("views","./views");
app.set("view engine","jade");
app.use(express.static("public"));
var mongoose=require("mongoose");
var movieSchema=require("./schema/movieSchema");
var conn=mongoose.connect("mongodb://localhost/youmovie");
var Movie=mongoose.model("movies",movieSchema);
  /*  var _movie=new Movie();
        _movie.title="等等大电影";
        _movie.picUrl="/images/pic10.jpg";
        _movie.videoUrl="http://player.youku.com/player.php/sid/XMTU3NTI0Njk3Ng==/v.swf";
       _movie.save(function(err){
           if (err){console.log(err);}
           else{
               console.log(" 数据保存数据库成功！");
           }
       })
//查
Movie.find(function(err,fd){
 if(err){console.log(err)}else{
     console.log(fd);
 }
})*/
app.get("/",function(req,res){
    res.render("index",{"title":"首页","movies":[
        {   "id":1,
            "title":"洛杉矶捣蛋计划",
            "picUrl":"http://r4.ykimg.com/05160000573ED3DE67BC3D1B520C3F77",
            "videoUrl":"http://player.youku.com/player.php/sid/XMTU3NTI0Njk3Ng==/v.swf"
        },
        {   "id":2,
            "title":"功夫熊猫3",
            "picUrl":"http://r1.ykimg.com/051600005732A53C67BC3C1C5E01180E",
            "videoUrl":"http://player.youku.com/player.php/sid/XMTU2NTk5MDgxMg==/v.swf"
        }
    ]});
});
app.get("/list",function(req,res){
    res.render("list",{"title":"列表页面","movies":[
        {   "id":1,
            "title":"洛杉矶捣蛋计划",
            "picUrl":"http://r4.ykimg.com/05160000573ED3DE67BC3D1B520C3F77",
            "videoUrl":"http://player.youku.com/player.php/sid/XMTU3NTI0Njk3Ng==/v.swf"
        },
        {   "id":2,
            "title":"功夫熊猫3",
            "picUrl":"http://r1.ykimg.com/051600005732A53C67BC3C1C5E01180E",
            "videoUrl":"http://player.youku.com/player.php/sid/XMTU2NTk5MDgxMg==/v.swf"
        }
    ]});
});
app.get("/detail",function(req,res){
    res.render("detail",{"title":"详情页面","movie":  {   "id":1,
        "title":"洛杉矶捣蛋计划",
        "picUrl":"http://r4.ykimg.com/05160000573ED3DE67BC3D1B520C3F77",
        "videoUrl":"http://player.youku.com/player.php/sid/XMTU3NTI0Njk3Ng==/v.swf"
    }});
});
app.listen(8080,function(){
    console.log("app启动完毕");
})