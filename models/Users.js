const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new Schema ({

    name : {
        type : String,
        require : true,
        unique : true
    },

    email : {
        type : String,
        require : true,
        unique : true

    },



})

module.exports = mongoose.model('users',userSchema.plugin(uniqueValidator))