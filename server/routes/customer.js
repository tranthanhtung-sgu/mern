const express = require("express")
const router = express.Router();
const Customer = require('../models/Customer')
const argon2=require("argon2")
const jwt=require("jsonwebtoken")

//Get Customer
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json({ success: true, message: "Get Customers succeessss", customers })
    } catch (err) {
        console.log(err.message);
    }
})

router.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    if(!username||!password){
        return res.status(400).json({success:false,message:"miss username or password"})
    }
    try{
        //check for existing user
        const customer=await Customer.findOne({username});
        if(!customer){
            return res.status(400).json({success:false,message:"Incorrect username or password"})
        }
        const passwordValid=await argon2.verify(customer.password,password);
        if(!passwordValid){
            return res.status(400).json({success:false,message:"Incorrect username or password"})
        }
        //return token
        const accessToken=jwt.sign({userId:customer._id},process.env.ACCESS_TOKEN_SECRET)
        res.json({success:true,message:"login success",customer})
    }catch(error){
        console.log(error,"loi cmnr")
    }
})

router.post("/register", async (req, res) => {
    try {
        const { username, password, name, phone, address, email } = req.body
        const hashedPassword=await argon2.hash(password)
        const customer = new Customer({
            username, password:hashedPassword , name, phone, address, email
        })
        await customer.save()
        
        res.json({ success: true, message: "Post customer success", customer })
    } catch (err) {
        console.log(err.message)
    }

})
router.put("/:id", async (req, res) => {
    try {
        const { username, password, name, phone, address, email } = req.body
        await Customer.findOneAndUpdate({_id:req.params.id},{ username, password, name, phone, address, email } )
        res.json({ success: true, message: "Update customer success", customer:{username, password, name, phone, address, email } })
    } catch (err) {
        console.log(err.message)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Customer.findOneAndDelete({_id:req.params.id})
        res.json({ success: true, message: "Delete customer success" })
    } catch (err) {
        console.log(err.message)
    }

})
module.exports=router