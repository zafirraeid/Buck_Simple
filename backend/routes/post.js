const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/postingModel')

//Check if User is signed in

//Get all posts
router.get('/entirefeed', (req,res) => {
    try {

    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

//Make a new post
router.post('/createpost', (req,res) => {
try {

}
catch(err) {
    res.status(500).json({error:err.message}) 
}
})

//Delete a post
router.delete('/deletepost/:id', (req,res) => {
    try {

    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

//Update a post
router.patch('/updatepost/:id', (req,res) => {
    try {

    }
    catch(err) {
        res.status(500).json({error:err.message}) 
    }
})

module.exports = router