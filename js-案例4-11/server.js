var http=require("http");
var fs=require("fs");
var url=require("url");
http.createServer(request,response){
	var pathname=url.parse(request.url).pathname;
	console.log("请求地址:"+pathname+"收到");
}.listen(8081);
