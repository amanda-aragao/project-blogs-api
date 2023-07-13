'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'post_id',
        primaryKey: true,
        references:{
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'category_id',
        primaryKey: true,
        references:{
          model: 'categories',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('posts_categories');
  }
};
