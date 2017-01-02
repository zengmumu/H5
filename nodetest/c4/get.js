/**
 * Created by admin on 2016/6/15.
 */
var http=require("http");
var url=require("url");
var util=require("util");
http.createServer(function(req,res){
    //var params=util.inspect(url.parse(req.url,true));
    var name=url.parse(req.url,true).query.uname;
    var email=url.parse(req.url,true).query.uemail;
    var str="name:"+name+"\nemail:"+email;
    res.writeHead(200,{"contentType":"text/plain"});
    //res.end(params);
    res.end(str);
    console.log(str);
}).listen(8080)
console.log("服务启动挖宝");