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
userId: {
    type: ObjectId,
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
}
},
{timestamps: true})


module.exports = Post = mongoose.model('Post', postSchema)