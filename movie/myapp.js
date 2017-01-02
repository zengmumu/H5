/**
 * Created by admin on 2016/5/23.
 */
var express=require("express");
var app=express();
var session = require('express-session');

var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var movieSchema=require("./schema/movieSchema");
var userSchema=require("./schema/userSchema");
var conn=mongoose.connect("mongodb://localhost/mymovie");
var Movie=mongoose.model("movies",movieSchema);
var User=mongoose.model("users",userSchema);
var multer=require("multer");
var fs=require("fs");

 /*   var _movie=new Movie();
_movie.title="mumu person dy";
_movie.save(function(err){
    console.log("成功保存");
});*/
/*var _user=new User();
_user.name="admin";
_user.password="admin123";
_user.save(function(err){
    console.log("超级密码");
})
User.find({},function(err,users){
    console.log(users);
});*/
    //Movie.find({},function(err,movies){
        //console.log(movies);
    //})
app.set("views","./views");
app.set("view engine","jade");
app.listen(8080);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(multer({ dest:"/temp"}).array("image"));

app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    cookie:{ maxAge: 1000*60*30}
}));
app.get("/",function(req,res){
  Movie.find(function(err,mos){
      res.render("index",{"title":"首页",movies:mos});
  })
})
app.get("/list/",function(req,res){
    Movie.find(function(err,mos){
        res.render("index",{"title":"列表页面",movies:mos});
    })
})
app.get("/detail/:id",function(req,res){
    var id=req.params.id;
    Movie.find({_id:id},function(err,mos){
        var mo=mos[0];
        res.render("detail",   {"movie": mo});
    })

})
app.get("/admin/add",function(req,res){
    res.render("add",{"title":"添加电影"})
})
app.post("/admin/new",function(req,res){
  console.log(req.body);
    console.log(req.files[0]);
if(req.files[0]){
    var des_file=__dirname+"/public/upload/"+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
         if(err){console.log("失败啦")}
        })
    })
}

    var _movie=new Movie();

    _movie.title=req.body.title;
    _movie.videoUrl=req.body.videoUrl;
    _movie.picUrl=req.body.picUrl;
    if(req.files[0]){
        _movie.picUrl= "/upload/"+req.files[0].originalname;
    }
    _movie.save(function(err){
        res.render("add",{title:"添加电影"});
    })

})
app.get("/admin/list",function(req,res){
    if(!req.session.user){
        req.session.err="请先登录";
        res.redirect("/logIn.html");
    }
    Movie.find(function(err,mos){
        console.log(req.session.user);
        res.render("ad_list",{"title":"列表",movies:mos,"user":req.session.user});
    })


})

app.delete("/admin/delete/",function(req,res){
    var id=req.query.id;
    Movie.remove({_id:id},function(err,mos){
        res.end("删除成功");
    })


})

app.get("/admin/update/:id",function(req,res){
    var id=req.params.id;
    //console.log(id);

   Movie.find({_id:id},function(err,mos){
        var mo=mos[0];
        //console.log(mo);
       res.render("update",{"title":"更新",movie:mo});
    })


});

app.post("/admin/upmoive/",function(req,res){
   console.log("我来处理");
    var id=req.body.id;
    var ti=req.body.title;
    var vr=req.body.videoUrl;
    var pr=req.body.picUrl;
    console.log(req.body);
    Movie.findByIdAndUpdate(id,{$set:{title:ti,videoUrl:vr,picUrl:pr}},
        function(err,mo){

        console.log("更新成功");
            res.redirect('/detail/'+mo._id);

    })



})

///////////////////////////////////////////////////登陆模块
app.post("/login",function(req,res){
    var uname=req.body.uname;
    var upass=req.body.upass;

    User.find({name:uname},function(err,data){
     if(err){
         res.send(500);
         console.log(err);
     }else if (!data){
            req.session.error = '用户名不存在';
            res.send(404);                            //    状态码返回404
            //    res.redirect("/login");
        }else{
            if(upass!=data[0].password){
                req.session.error = "密码错误";
                res.send(404);
                //    res.redirect("/login");
            }else{
                console.log("登陆成功");
                req.session.user=data[0];

                res.redirect("/admin/list");
            }
        }




    })
});
app.post("/register",function(req,res){
    var uname=req.body.uname;
    var upass=req.body.upass;
    User.create({       // 创建一组user对象置入model
        name: uname,
        password: upass
    },function(err,doc){
        req.session.error = '用户名创建成功！';
        res.send(200);
        res.redirect("/logIn.html");
    })
})
app.get("/logout",function(req,res){
    req.session.user = null;
    req.session.error = null;
    res.redirect("/");
})
/*app.get("/!*",function(req,res){
    res.render("index",{"title":"首页"})
})*/
console.log("启动成功");

