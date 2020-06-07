const User = require("../models/Users")


module.exports = {

    register : (req,res) => {
        User.create({
            name : req.body.name,
            email : req.body.email
        }).then((response) => res.json(response))
            .catch((err) =>  status(400).json(err))
    },

    getUser : (req,res) => {
        User.find({})
        .then((response) => res.json(response))
        .catch((err)=> status(400).json(err))
    },

    updateUser : (req,res) => {
        User.findByIdAndUpdate(req.params.userId,{
            name : req.body.name,
            email : req.body.email
        }).then((response) => res.json(response))
        .catch((err) => status(400).json(err))
        
    },

    deleteUser : (req,res) => {
        User.findByIdAndRemove(req.params.userId)
        .then((resposne) => res.json(resposne))
        .catch((err) => status(400).json(err))
    },

    getUserById : (req,res) => {
        User.findById(req.params.userId)
        .then((response) => res.json(response))
        .catch((err) => status(400).json(err))
    }

}