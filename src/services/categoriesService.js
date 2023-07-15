const { Category } = require('../models');

const addNewCategories = async (name) => {
  const createCategories = await Category.create({ name });
  return createCategories;
 };

 const getAllCategories = async () => {
  const getCategories = await Category.findAll(); 
  if (!getCategories) {
   return { message: 'Category not found' };
  }
  return getCategories;
 };
 
 module.exports = { addNewCategories, getAllCategories };