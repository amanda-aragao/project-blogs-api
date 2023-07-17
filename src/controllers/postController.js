const postService = require('../services/postService');

const getAllPost = async (req, res) => {
  const infoPost = req.body;
  const response = await postService.getAllPost(infoPost);
  // console.log(response);
  if (response.message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

const getIdPost = async (req, res) => {
  const { id } = req.params;
  const response = await postService.getIdPost(id);
  if (response.message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

module.exports = {
  getAllPost,
  getIdPost,
};
