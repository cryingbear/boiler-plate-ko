const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50,
        minlength:3,
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password: {
        type: String,
        minlength:5
    },
    lastname:{
        type: String,
        maxlength:50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    tocken:{
        type:String
    },
    tockekExp:{
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
