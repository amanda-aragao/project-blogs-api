const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/userController');
const { validateDisplayName, 
  validateEmail, validatePassword } = require('../middlewares/validateUser');

userRouter
.post('/', validateDisplayName, validateEmail, validatePassword, userController.createNewUser);

module.exports = userRouter;