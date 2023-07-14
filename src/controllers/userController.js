const userService = require('../services/userService');
const { createToken } = require('../auth/authfunctions');

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.createNewUser(displayName, email, password, image);
  if (response.message) {
    return res.status(409).json(response);
  }
  const user = await userService.getEmailByUser(email);
  const { password: _password, ...allTheRestOfUser } = user.dataValues;
  const payload = { data: allTheRestOfUser };
  const token = createToken(payload);
  return res.status(201).json({ email: user.email, token });
};

module.exports = { createNewUser };
