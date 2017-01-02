var http=require("http");
var url=require("url");
var util=require("util");
http.createServer(function(req,res){
    res.writeHead(200,{"contentType":"text/plain"});
    var re=util.inspect(url.parse(req.url,true));
    //res.write("<html><head><meta charset='utf-8'></head>");
    res.end(re);
    //inspect 把json对象转换为字符形式
    //url.parse 解析地址栏

}).listen(8080);
