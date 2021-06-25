const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const productSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    screen:{
        type:String,
        require:true
    },
    cpu:{
        type:String,
        require:true
    },
    ram:{
        type:String,
        require:true
    },
    rom:{
        type:String,
        require:true
      
    },
    img:{
       type:String,
       require:true
    },
    brand:{
        type:mongoose.Types.ObjectId,
        ref:"brands"
    }
    

})
module.exports=mongoose.model("products",productSchema);