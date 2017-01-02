var fs=require("fs");
console.log("准备打开文件");
fs.stat("input.txt",function(err,stats){
	if(err){return console.error(err)}
	console.log("文件读取成功");
	console.log("是否为文件(isFile)  " + stats.isFile());
   console.log("是否为目录(isDirectory) " + stats.isDirectory());
})
