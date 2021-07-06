const express = require("express")
const router = express.Router();
const Comment = require('../models/Comment')
//POST
router.post('/', async (req, res) => {

    const { customer, product, content } = req.body
    const comment = new Comment({
        customer, product, content
    })
    try {
        await comment.save()
        res.json({ success: true, message: "post Comment success", comment })
    } catch (error) {
        console.log(error.message)
    }
})
//GET ALL
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate("customer", ["name"])
        res.json({ success: true, message: "post Comment success", comments })
    } catch (error) {
        console.log(error.message)
    }
}),
    //GET COMMNET OF PRODUCT
    router.get('/:id', async (req, res) => {
        try {
            const comments = await Comment.find({ product: req.params.id }).populate("customer", ["name"])
            res.json({ success: true, message: "get Comment success", comments })
        } catch (error) {
            console.log(error.message)
        }
    })
    //DELETE
    router.delete('/:id', async (req, res) => {
        try {
            await Comment.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, message: "delete Comment success" })
        } catch (error) {
            console.log(error.message)
        }
    })
module.exports = router;//