var fs=require("fs");
fs.stat("input.txt",function(err,stats){
    if(err){console.log(err)}
   //console.log(stats);
    console.log("是不是文件:"+stats.isFile());
    console.log("是不是文件夹:"+stats.isDirectory());
    console.log("文件的大小:"+stats.size );

})