const categoriesService = require('../services/categoriesService');

const addNewCategories = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const response = await categoriesService.addNewCategories(name);
  return res.status(201).json(response);
};

const getAllCategories = async (req, res) => {
  const infosCategories = req.body;
  const response = await categoriesService.getAllCategories(infosCategories);
  if (response.message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

module.exports = { addNewCategories, getAllCategories };