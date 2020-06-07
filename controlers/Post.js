const Post = require("../models/Post")
const mongoose =  require("mongoose")

module.exports = {

    createPost : (req,res) => {
        Post.create({
            name : req.body.name,
            status : req.body.status
        }).populate("name")
        .populate({path : "like"})
        .then((response) => res.json(response))
        .catch((err) => status(400).json(err))
    },

    createLike : (req,res) => {
      Post.findOneAndUpdate(req.params.postId,{
          $push :{
              like : req.body.like
          }
      },{
          upsert : true,
          new : true
      }).then((response)=> res.json(response))
      .catch((err) => status(400).json(err))
    },

    getPost : (req,res) => {
        Post.find({})
        .then((response) => res.json(response))
        .catch((err) => status(400).json(err))
    },

    getPostById : (req,res) => {
        Post.findById(req.params.postId)
        .then((resposne) => res.json(resposne))
        .catch(err => status(400).json(err))
    },

    deletePost : (req,res) => {
        Post.findByIdAndRemove(req.params.postId)
        .then((response) => res.json(response))
        .catch(err => status(400).json(err))
    },



}