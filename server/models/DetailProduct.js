const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const detailProductSchema=new Schema({
    extImg:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"products"
    },

})

module.exports=mongoose.model("dertailProducts",dertailProducts)