const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const postSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
location: {
    type: String,
    required: true
},
author: {
    type: ObjectId,
    ref: 'User'
}, 
salary: {
    type: Number,
    required: true
},
img: {
    type: String,
    required: false
},
phonenum: {
    type: String,
    required: true
}
})


module.exports = Post = mongoose.model('Post', postSchema)