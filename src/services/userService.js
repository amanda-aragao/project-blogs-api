const { User } = require('../models');

const login = async (email, password) => {
  const loginUser = await User.findOne({ where: { email, password } }); 
  if (!loginUser) {
    return { message: 'Invalid fields' };
  }
  return loginUser;
};

const createNewUser = async (displayName, email, password, image) => {
  const findEmailUser = await User.findOne({ where: { email } });
  if (findEmailUser) {
    // console.log(findEmailUser);
    return { message: 'User already registered' };
  }
  const createUser = await User.create({ displayName, email, password, image });
  return createUser;
};

const getEmailByUser = (email) => User.findOne({ where: { email } });

module.exports = {
  login,
  getEmailByUser,
  createNewUser,
};
