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

module.exports = {
  getAllPost,
};
