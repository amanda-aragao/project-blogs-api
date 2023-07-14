const express = require('express');

const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const validateInputsLogin = require('../midlewares/validateLogin');

loginRouter.post('/', validateInputsLogin, loginController.login);

module.exports = loginRouter;