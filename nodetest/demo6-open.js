var fs=require("fs");
fs.open("input.txt","r+",function(err,fd){
    if(err){console.log(err)};
    console.log("打开文件完毕");
    console.log(fd);
})