const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const auth = require('../middleware/auth')

//Sign Up
router.post('/signup', async (req,res) => {
try{
let {name, email, password, phonenum} = req.body

//Check for all fields
if( !email || !name || !password || !phonenum) {
    res.status(400).json({msg: "Add all of the fields"})
}

//Check for length
if(password.length < 6) {
    res.status(400).json({msg: "Password should be atleast 6 characters"})
}
//Check for already registered user
const registeredUser = await User.findOne({email:email})

if(registeredUser) {
    res.status(400).json({msg: "User already exists"})
} 

//Encrypts password
const salt = await bcrypt.genSalt()
const hashPass = await bcrypt.hash(password, salt)

//Save user
const newUser = new User({ 
    name, email, password: hashPass, phonenum
})

const savedUser = await newUser.save()
res.json(savedUser)
}
catch(err) {
    res.status(500).json({error:err.message})
}
})

//Sign in
router.post('/signin', async (req,res) => {
    try{
        const {email, password} = req.body

        //Check for all fields
        if( !email || !password) {
            res.status(400).json({msg: "Add all of the fields"})
        }

        //Check for email already exists in database
        const user = await User.findOne({email:email})
        if(!user) {
            res.status(400).json({msg: "This email has not been registerd"})
        }

        //Check password
        const checkPass = await bcrypt.compare(password, user.password)
        if(!checkPass) {
            res.status(400).json({msg: "Incorrect Password"})
        }

        //Token assignment
        const token = jwt.sign({id: user._id}, process.env.JWT)
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phonenum: user.phonenum
            }
        })
    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

//Deleting User
router.delete('/delete/:id',auth, async (req,res) => {

try{
const deleteUser = await User.findByIdAndDelete(req.params.id)
res.json(deleteUser)
}
catch(err) {
   res.status(500).json({error:err.message}) 
}
})

//Updating User
router.patch('/update/:id', async (req,res) => {  
const updateUser = await User.findById(req.params.id)
if(!updateUser) {
    res.status(400).json({message: "User not found"})
} else{
const salt = await bcrypt.genSalt()
const hashedPass = await bcrypt.hash(updateUser.password, salt)
   User.findOneAndUpdate({_id: req.params.id}, {
       name: req.body.name,
       email: req.body.email,
       password: hashedPass,
       phonenum: req.body.phonenum
   }).then(result => {
       res.json(result)
   }).catch(err => {
    res.status(500).json({error:err.message}) 
   })

}

})

module.exports = router
