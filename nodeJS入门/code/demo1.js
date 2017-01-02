var http=require("http");
http.createServer(function(request,response){
	response.writeHeader("200",{"content-type":"text/html"});
	//状态码200，返回类型是 html  "text/plain"
	response.end("<h1>Hello node.js</h1>");
	
}).listen(8888);
console.log("服务器在127.0.0.1：8888 上运行");
