var http=require("http");

//var url=require("url");
var querystring=require("querystring");
var util=require("util");
http.createServer(function(req,res){
    var post="";
    req.on("data",function(data){
        post+=data;
    })
    req.on("end",function(){
        post=querystring.parse(post);

        res.end(util.inspect(post));
        console.log(util.inspect(post));

    })
}).listen(8080);
//querystring从名字就可以看出是一个和参数相关的帮助类,node.js原生自带,直接 require('querystring') 即可使用