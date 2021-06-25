const  express =require('express')
const router =express.Router();
const Brand= require('../models/Brand');
//POST
router.post('/',async (req,res)=>{
    const {name,description}=req.body;
    try{
        const newBrand=new Brand({
           name,description
        }
        );
        await newBrand.save();
        res.json({success:true,message:"them thanh cong",newBrand})
    }catch(error){
        console.log(error.messagem,"loi cmnr");
    }
})

//GET
router.delete('/:id',async (req,res)=>{
    try{
        const deletedBrand=await Brand.findOneAndDelete({_id:req.params.id})
        res.json({success:true,message:"xoa thanh cong",deletedBrand})
    }catch(error){
        console.log(error.messagem,"loi khong xoa duoc");
    }
})
module.exports= router;

//PUT
router.put('/:id',async (req,res)=>{
    const {name,description}=req.body;
    try{
        const newBrand={name,description};
        await Brand.findOneAndUpdate({_id:req.params.id},{name,screen,cpu,ram,rom,img});
        res.json({success:true,message:"update thanh cong",newBrand})
    }catch(error){
        console.log(error.message,"loi update");
    }
})
//GET ALL
router.get('/',async (req,res)=>{
    try{
        const brands=await Brand.find();
        res.json({success:true,message:"tim thay thanh cong",brands})
    }catch(error){
        console.log(error.messagem,"loi khogn tim duoc");
    }
})
//GET ONE
router.get('/:id',async (req,res)=>{
    try{
        const brand=await Brand.findOne({_id:req.params.id});
        res.json({success:true,message:"tim thay thanh cong",Brand})
    }catch(error){
        console.log(error.messagem,"loi khogn tim duoc");
    }
})
