const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const getPost = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }] }); 
 
    if (!getPost) {
   return { message: 'Post not found' };
  }

  return getPost;
 };

 module.exports = {
  getAllPost,
};