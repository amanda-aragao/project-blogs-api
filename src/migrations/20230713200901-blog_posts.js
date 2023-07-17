'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('blog_posts', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          field: 'user_id',
          references:{
            model: 'users',
            key: 'id',
          },
        },
        published: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    },

  down: async (queryInterface) => {
    await queryInterface.dropTable('blog_posts');
  }
};

