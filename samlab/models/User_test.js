const mongoose=require("mongoose");
const Schema=mongoose.Schema
 
const userTestSchema= new Schema({
  user_id: {
        type:Schema.Types.ObjectId,
        ref:"user"
     },
    test_ids:[{type: Schema.Types.ObjectId, ref:"test"}],/// array of object
    date:Date,
    status:String,
    
})
 
const userTestModel=mongoose.model("userTest",userTestSchema);
module.exports=userTestModel;