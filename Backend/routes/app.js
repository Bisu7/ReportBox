const express = require('express');
const router = express.Router();

const User = require("../models/userModel");

//read
router.get('/users', async(req,res) => {
    try{
        const users  = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

//create
router.post('/users', async(req,res) => {
    try{
        const {name,email,phone,location,problemTitle} = req.body;
        const newUser = new User({name,email,phone,location,problemTitle})
        await newUser.save();
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})
