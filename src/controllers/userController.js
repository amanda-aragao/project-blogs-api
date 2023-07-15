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

const getAllUsers = async (req, res) => {
  const infoUsers = req.body;
  const response = await userService.getAllUsers(infoUsers);
  // console.log(response);
  if (response.message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

const getUserId = async (req, res) => {
  const { id } = req.params;
  const response = await userService.getUserId(id);
  if (response.message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

module.exports = { createNewUser, getAllUsers, getUserId };
