/**
 * Created by admin on 2016/6/4.
 */
var mongoose=require("mongoose");
var userSchema=new mongoose.Schema({
    name:String,
    password:String
});
module.exports=userSchema;

