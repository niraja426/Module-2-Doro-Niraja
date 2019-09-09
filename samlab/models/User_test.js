const mongoose=require("mongoose");
const Schema=mongoose.Schema
 
const userTestSchema= new Schema({
  user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
     },
    test_id:Array,/// array of object
    date:Date(),
    status:String,

})
 
const userTestModel=mongoose.model("userTest",userTestSchema);
module.exports=userTestModel;