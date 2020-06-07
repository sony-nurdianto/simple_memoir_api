const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = new Schema ({

    name : {
        type : Schema.Types.ObjectId,
        ref : "users"
    },

    status : {
        type : String,
        required : true
    },

    like : [{
        type : Schema.Types.ObjectId,
        ref : "users"
    }]

},{timestamps : true})

module.exports = mongoose.model("post",postSchema)