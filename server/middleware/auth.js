const { verify } = require("argon2");
const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
        const authHeaer=req.header("Authorization");
    const token=authHeaer&&authHeaer.split(" ")[1];
    if(!token){
        return res.status(400).json({success:false,message:"Access token not found "})
    }
    try{
        decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.userId=decoded.userId;
        next()
     }catch(error){
        console.log(error);
        return res.status(403).json({success:false,message:"your token so bad  "})
    }
    
}
module.exports=verifyToken;