module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'post_id',
      allowNull: false,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
    categoryId:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
    },

  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true 
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { through: PostCategory, otherKey: 'postId', foreignKey: 'categoryId', as: 'blogPosts' });

    models.BlogPost.belongsToMany(models.Category,
      { through: PostCategory, otherKey: 'categoryId', foreignKey: 'postId', as: 'categories' });
  };


  return PostCategory;
};