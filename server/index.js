require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const authRouter=require('./routes/auth')
const postRouter=require('./routes/post')
const connectDB = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.cjwrv.mongodb.net/mern-learnit?retryWrites=true&w=majority`,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
        })
        console.log("mongo db connect");
    }catch(error){
        console.log(error.message,"loi");
        process.exit(1);
    }
}
connectDB();
const app=express();
// app.get("/",(req,res)=>res.send("hello world"));
app.use(express.json())// để đọc được dữ liệu trong body
app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)

const PORT=5000;
app.listen(PORT,()=>console.log(`server run on port ${PORT}`))