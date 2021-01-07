const mongoose = require('mongoose')

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
userName: {
    type: String,
    required:true
}, 
salary: {
    type: Number,
    required: true
},
photo: {
    type: String,
    required: true
},
phonenum: {
    type: String,
    required: true
}, 
reserved: {
    type: Boolean,
    default: false
}
},
{timestamps: true})


module.exports = Post = mongoose.model('Post', postSchema)