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

const getAllUsers = async () => {
 const getUsers = await User.findAll({ attributes: { exclude: ['password'] } }); 
 if (!getUsers) {
  return { message: 'Users not found' };
 }
 return getUsers;
};

const getUserId = async (id) => {
  const getId = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } }); 
  if (!getId) {
   return { message: 'User does not exist' };
  }
  return getId;
 };

module.exports = {
  login,
  getEmailByUser,
  createNewUser,
  getAllUsers,
  getUserId,
};
