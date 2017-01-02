var http=require("http");
var fs=require("fs");
var url=require("url");//处理地址信息
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    fs.readFile(pathname.substr(1),function(err,fd){
        if(err){
            console.log("找不到文件404");
            res.writeHead(404,{"contentType":"text/html;charset=UTF-8"});
            res.end("<head><meta charset='utf-8'></head><h1>404页面找不到了</h1><a href='/index.html'>回到首页</a>")
        }else{
            console.log(pathname);
            res.writeHead(200,{"contentType":"text/html;charset=UTF-8"});
            res.write(fd.toString());
            res.end();

        }

    })

}).listen(8080);
console.log("服务器启动完毕");
