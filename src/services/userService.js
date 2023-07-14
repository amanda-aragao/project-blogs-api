const { User } = require('../models');

const login = async (email, password) => {
  const loginUser = await User.findOne({ where: { email, password } }); 
  if (!loginUser) {
    return { message: 'Invalid fields' };
  }
  return loginUser;
};

const getEmailByUser = (email) => User.findOne({ where: { email } });

module.exports = {
  login,
  getEmailByUser,
};
