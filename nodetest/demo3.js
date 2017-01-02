var fs=require("fs");
var data=fs.readFileSync("input.txt");
console.log(data.toString());
console.log("我是最后一条要执行的命令");
