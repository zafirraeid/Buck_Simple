const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true,
    minlength: 6
},
phonenum: {
    type: String,
    required: true
}
})


module.exports = User = mongoose.model('User', userSchema)