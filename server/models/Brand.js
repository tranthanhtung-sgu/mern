const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const brandSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"products"
    }

})
module.exports=mongoose.model("brands",brandSchema);