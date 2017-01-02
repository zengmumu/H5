var fs=require("fs");
fs.writeFile("mycreate.txt","这是我写入的内容我傲娇",function(err){
	if(err){return console.error(err)}
	console.log("文件写入成功");
	console.log("------------开始读取写入的内容----------");
	fs.readFile("mycreate.txt",function(err,data){
		if(err){return console.error(err)}
		console.log("文件写读取成功");
		console.log(data.toString());
	})//readFile
	
})//writeFile

