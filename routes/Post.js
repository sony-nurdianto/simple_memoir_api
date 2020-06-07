const express = require("express");
const router = express.Router();
const postcontroler = require("../controlers/Post")


router.post("/create",postcontroler.createPost)
router.put("/like/:postId",postcontroler.createLike)
router.get("/show",postcontroler.getPost)
router.get("/show/:postId",postcontroler.getPostById)
router.delete("del/:postId",postcontroler.deletePost)

module.exports = router