const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/postingModel')
const auth = require('../middleware/auth')
const User = require('../models/userModel')


//Get all posts
router.get('/feed', auth, async (req,res) => {
    try {
const allPosts = await Post.find()
res.json(allPosts)
    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

//Guest feed
router.get('/guestfeed', async (req,res) => {
    try {
const allPosts = await Post.find()
res.json(allPosts)
    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})


//Individual Posts
router.get('/profile', auth, async (req,res) => {
    try {
const ownPost = Post.find({author:req.user.id})
res.json(ownPost)
    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

//Make a new post
router.post('/createpost',auth, async (req,res) => {
try {
    let {title, description, location, salary, phonenum, photo} = req.body

    //Check for all required fields
    if( !title || !description || !location || !salary || !phonenum || !photo) {
        res.status(400).json({msg: "Add all of the required fields"})
    }
    
    //Create post
    const newPost = new Post({ 
        title,description,location,salary,phonenum,photo,
    })
    
    const savedPost = await newPost.save()
    res.json(savedPost)
}
catch(err) {
    res.status(500).json({error:err.message}) 
} 

})

//Delete a post
router.delete('/deletepost/:id', auth, async (req,res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id)
        res.json(deletePost)
    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

//Update a post
router.patch('/updatepost/:id', auth, async (req,res) => {
    const updatePost = await post.findById(req.params.id)
if(!updatePost) {
    res.status(400).json({message: "Post not found"})
} else{
   Post.findOneAndUpdate({_id: req.params.id}, {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      salary: req.body.salary,
      phonenum: req.body.phonenum,
      photo: req.body.photo,
   }).then(result => {
       res.json(result)
   }).catch(err => {
    res.status(500).json({error:err.message}) 
   })

}
})


module.exports = router