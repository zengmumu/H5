var fs=require("fs");
/*
var data="I love China  wow！"
fs.writeFile("zeng.txt",data,function(err,fd){
    if(err){console.log(err)}
    console.log("写入文件成功");
})*/
var http = require("http");
http.get("http://www.qingkt.com/index.html", function(res) {
    var data = "";
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on("end", function() {
        //callback(data);
        console.log(data);
        fs.writeFile("qkt.html",data,function(err,fd){
            console.log("文件写入完毕");
        })
    });
});/*ar readerStream = fs.createReadStream('http://www.qingkt.com/index.html');
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");
*/