const userService = require('../services/userService');
const { createToken } = require('../auth/authfunctions');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.login(email, password);
  if (response.message) {
    return res.status(400).json(response);
  }
  const user = await userService.getEmailByUser(email);
  const { password: _password, ...allTheRestOfUser } = user.dataValues;
  const payload = { data: allTheRestOfUser };
  const token = createToken(payload);
  return res.status(200).json({ email: user.email, token });
};

module.exports = {
  login,
};