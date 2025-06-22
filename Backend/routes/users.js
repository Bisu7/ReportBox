import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

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
        res.status(200).json({
            success:true,
            user: newUser
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

export default router;
