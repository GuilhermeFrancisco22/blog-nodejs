const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feedController");
const { validTitle, validContent } = require("../services/validators");

//Criar as rotas relacionadas ao feed

router.get("/posts", feedController.getPosts);

router.post("/post", [validTitle, validContent], feedController.createPost);

router.post("/post/postID", feedController.updatePost);

router.post("/post/postID", feedController.deletePost);

module.exports = router;
