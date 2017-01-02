/**
 * Created by admin on 2016/6/17.
 */
var mongoose=require("mongoose");
var movieSchema=new mongoose.Schema({
    title:String,
    picUrl:String,
    videoUrl:String
})
module.exports=movieSchema;
