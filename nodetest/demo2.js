/**
 * Created by admin on 2016/6/14.
 */
var http=require("http");
//获取一个http 包（服务）
http.createServer(function(req,res){//创建一个http服务器
res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    //服务器响应头信息  响应正确状态码200  响应的内容格式为 文本
    res.end("<h1>hello world</h1>");//响应的内容 helloword

}).listen(8080);//服务器监听8080端口  网站的默认端口 80
console.log("服务器创建完毕，开始启动");//提示服务创建完毕