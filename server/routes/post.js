const express=require("express");
const router=express.Router();
const Post=require(`../models/Post`)
const verifyToken=require("../middleware/auth")

//GET
router.get('/',verifyToken,async(req,res)=>{
    try{
        const posts=await Post.find({user:req.userId}).populate("user",['username'])
        res.json({success:true,posts})
    }catch(error){
        console.log(error);
        res.status(400).json({success:false,message:"loi"})
    }
})





//POST
router.post("/",verifyToken,async (req,res)=>{
    const {title,description,url,status}=req.body;
    if(!title){
        return res.status(400).json({success:false,message:"title is require"});
    }
    try{
        const newPost=new Post({
            title,
            description,
            url:(url.startsWith('http://')?url:`http://${url}`),status,
            status:status||"TO LEARN",
            user:req.userId
        })
        await newPost.save();
        res.json({success:true,message:"happy learning",post:newPost})
    }catch(error){
        console.log(error)
    }    
})


//PUT
router.put("/:id",verifyToken,async (req,res)=>{
    const {title,description,url,status}=req.body;
    if(!title){
        return res.status(400).json({success:false,message:"title is require"});
    }
    try{
        let updatedPost={
            title,
            description:description||"",
            url:(url.startsWith('http://')?url:`http://${url}`)||"",
            status:status||"TO LEARN"
        }
      const postUpdateCondition={_id:req.params.id,user:req.userId} ;
      updatedPost=await Post.findOneAndUpdate(postUpdateCondition,updatedPost,{new :true})
      //new:true sau khi update xong sẽ được cho vào updatePost còn không sẽ trả lại post chưa được upateupate

      //user not authorized to update post
      if(!updatedPost){
          return res.json(401).json({success:false })
      }
      res.json({succes:true,message:"excellent",post:updatedPost})
      
    }catch(error){
        console.log(error)
    }    
})

//DELETE
router.delete("/:id",verifyToken,async(req,res)=>{
    const deleteCondition={_id:req.params.id,user:req.userId};
    try{
    const deletedPost=await Post.findOneAndDelete(deleteCondition);
    res.json({success:true,message:"delete success"})
    }catch(error){
        return res.status(500).json({succcess:false,message:"Internal Server"})
    }
})

module.exports=router;