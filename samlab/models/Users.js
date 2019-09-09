const mongoose=require("mongoose");
const Schema=mongoose.Schema
 
const userSchema= new Schema({
    username: String,
    password: String,
    address:String,
    phone:Number,
    email:String

})
 
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;
