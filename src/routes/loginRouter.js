const express = require('express');

const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const validateInputsLogin = require('../middlewares/validateLogin');

loginRouter.post('/', validateInputsLogin, loginController.login);

module.exports = loginRouter;