const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

router.post("/push", async(req,res)=>{
    try{
        const newUser = new userModel(req.body);
        await newUser.save();
            res.status(200).send({message: "User saved successfully", success: true})
            
        }
        catch(error) {
            console.log(error)
            res.status(500).send({message: "Error storing user", success: false})
    }
});

module.exports = router;