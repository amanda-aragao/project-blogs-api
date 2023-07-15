const express = require('express');

const categoriesRouter = express.Router();
const categoriesController = require('../controllers/categoriesController');
const validateToken = require('../middlewares/validateToken');
// const validateName = require('../middlewares/validateCategory');

categoriesRouter
.post('/', validateToken, categoriesController.addNewCategories);

module.exports = categoriesRouter;