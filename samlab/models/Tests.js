const mongoose=require("mongoose");
const Schema=mongoose.Schema
 
const testSchema= new Schema({
   name:String,
   price:Number,
   description: String,
   normal_value:String
})
 
const testModel=mongoose.model("test",testSchema);
module.exports=testModel;
