/**
 * Created by admin on 2016/5/9.
 */
var express=require("express");
var app=express();
var mongoose=require("mongoose");
//var ObjectId= require('mongodb').ObjectID;
var bodyParser= require('body-parser');
var schema = require('./schemas/movie');
var mongoose = require('mongoose');
//var ObjectID = require('mongodb').ObjectID;
//mongoose.connect('mongodb://localhost/my'); //连接到一个test的数据库
app.set("views","./views");
app.set("view engine","jade");
app.listen(4000);

var conn = mongoose.connect('mongodb://localhost/mymovie');

var movie=mongoose.model("movies2",schema);
//var movie1=new movie();
//movie1.title="zengmumu fitig node js";
//movie1.year="2016";
//movie1.save(function(err){
//    if(err){
//
//    }
//    console.log("good save success");
//})
//movie.find({},function(err,movies){
//    console.log(movies);
//})
////

//
//
////保存新纪录
//var blog1 = new Blog();
//blog1.id22 = 4;
//blog1.title="zengmu";
//blog1.save(function(err){
//    if (err) {
//        console.log('save failed');
//    }
//    console.log('save success');
//});
//
/////查找记录
//Blog.find({},function(err,docs){
//    console.log(docs);
//});



//Movie.fetch(function(err,movie){
//    console.log(movie);
//})
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get("/",function(req,res){
    //Movie.find(1,function(err,movie){
    //    console.log(movie);
    //})
    movie.find(function(err,movies){
        if(err){
            console.log(err);
        }
        //console.log(movies);
        res.render("index",{title:"mumu的首页", movies:movies})
    })

})
app.get("/detail/:id",function(req,res){
    var id = req.params.id;

    movie.find({_id: id},function(err,mo){
        console.log(mo);
        res.render("detail",{title:"电影的页面",movie:mo[0],});
    })

})
app.get("/admin/movie",function(req,res){
    res.render("admin",{title:"后台的页面", movie:{title:""}});
})
app.get("/admin/list",function(req,res){
    movie.find(function(err,movies) {
        if (err) {
            console.log(err);
        }
        //console.log(movies);
        res.render("list", {title: "列表页面", movies: movies})
    })
})
app.post("/admin/movie/new",function(req,res){
    console.log(req.body);
    var _movie=new movie();
        _movie.title=req.body.title;
        _movie.save(function(err){
            console.log("保存成功")
            res.render("admin",{title:"后台的页面", movie:{title:""}});
        })

    //console.log(req.body.movie);
   // res.render("admin",{title:"创造来"});
})
app.post("/admin/movie/update",function(req,res){
    //console.log(req.body);
    var ti=req.body.title;
    var id=req.body.id;
    //movie.findByIdAndUpdate(id,{title:ti});
    //movie.findOneAndUpdate
    //movie.update({"_id":id},{$set:{"title":ti}});
    //movie.findByIdAndRemove(id);
    movie.findByIdAndUpdate(id,{$set:{title:ti}},function(err,mo){
        console.log(mo.title); //MDragon
    });
    movie.find({_id:id},function (err,oni){
        //var tit=oni[0].title;
        console.log(oni);
        //movie.update({"title":tit},{$set:{"title":ti}})
    })

        res.render("admin",{title:"后台的页面", movie:{title:""}});


    //console.log(req.body.movie);
    // res.render("admin",{title:"创造来"});
})
app.delete("/admin/list/",function(req,res){
    var id=req.query.id;
    if(id){
        movie.remove({_id:id},function(err,mo){
            if(err){
                console.log(err);
            }
            res.json({success:1});
        })
    }
})

app.get("/admin/update/:id",function(req,res){
    var id = req.params.id;
   movie.find({_id:id},function(err,mo){
      var me=mo[0]

       res.render("update",{title:"修改","movie":me});
   })
})
console.log("项目启动 good");