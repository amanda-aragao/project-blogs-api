const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/userController');
const { validateDisplayName, 
  validateEmail, validatePassword } = require('../middlewares/validateUser');
  const validateToken = require('../middlewares/validateToken');

userRouter
.post('/', validateDisplayName, validateEmail, validatePassword, userController.createNewUser);
userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getUserId);

module.exports = userRouter;