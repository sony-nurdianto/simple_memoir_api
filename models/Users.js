const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new Schema ({

    name : {
        type : String,
        required : true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        unique : true

    },



})

module.exports = mongoose.model('users',userSchema.plugin(uniqueValidator))