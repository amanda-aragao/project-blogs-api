const express = require('express');

const categoriesRouter = express.Router();
const categoriesController = require('../controllers/categoriesController');
const validateToken = require('../middlewares/validateToken');

categoriesRouter
.post('/', validateToken, categoriesController.addNewCategories);
categoriesRouter.get('/', validateToken, categoriesController.getAllCategories);

module.exports = categoriesRouter;