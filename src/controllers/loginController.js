const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.login(email, password);
  if (response.message) {
    return res.status(400).json({ message: login.message });
  }
  return res.status(201).json(login);
};

module.exports = {
  login,
};