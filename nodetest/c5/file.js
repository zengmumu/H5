/**
 * Created by admin on 2016/6/16.
 */
var express=require("express");
var app=express();
var multer=require("multer");//处理图片
    app.use(multer({dest:"/temp/"}).array("image"));//处理图片
var bodyParser=require("body-parser");//处理参数
var urlencoded=bodyParser.urlencoded({ extended: false });//处理参数中间件
var fs=require("fs");//处理文件
app.use(express.static("public"));//显示静态文件的
app.post("/file",urlencoded,function(req,res){
    // 上传的文件是什么
     console.log( req.files[0]);
    //设置上传的文件放在哪儿
    var dest=__dirname+"/public/"+ req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,fd){
        if(err){
            console.log("上传文件失败");
            res.send("<h1>upload err</h1><a href='javascirpt:history.go(-1)'>重新上传</a>")
        }else{
            fs.writeFile(dest,fd,function(err,data){
                if(err){console.log("上传文件失败")}else{
                    res.send("<h1>Success</h1><img src='"+ req.files[0].originalname+"'>");
                }
            })
        }
    })
})
app.listen(8080,function(){
    console.log("服务器启动完毕");
})
