const { Category } = require('../models');

const addNewCategories = async (name) => {
  const createCategories = await Category.create({ name });
  return createCategories;
 };

 module.exports = { addNewCategories };