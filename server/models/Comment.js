const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const CommentSchema=new Schema({
    customer:{
        type:mongoose.Types.ObjectId,
        ref:"customers"
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"products"
    },
    content:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model("comments",CommentSchema)