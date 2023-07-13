'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'post_id'
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'category_id',
        references:{
          model: 'categories',
          key: 'id',
        }
      },
    }, { timestamps: false, underscored: true });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('posts_categories');
  }
};
