var fs=require("fs");
    fs.readFile("input.txt",function(err,data){
        if(err){console.log(err)}
        console.log(data.toString());
    })
console.log("我是最后一条命令");
