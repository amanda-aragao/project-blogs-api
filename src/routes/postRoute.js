const express = require('express');

const postRouter = express.Router();
const PostController = require('../controllers/postController');
const validateToken = require('../middlewares/validateToken');

postRouter.get('/', validateToken, PostController.getAllPost);

module.exports = postRouter;