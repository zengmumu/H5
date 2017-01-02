var  http=require("http");
var fs=require("fs");
var url=require("url")//处理url请求
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log("请求地址为："+pathname);
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            res.writeHead(404,{"contentType":"text/html;charset=UTF-8"})
            res.end("<h1>404</h1><a href='/index.html'>Home</a>");

        }else{
        res.writeHead(200,{"contentType":"text/html;charset=UTF-8"});
        res.write(data);
        res.end();
        }
    })
}).listen(8080);
console.log("服务器启动完毕");
