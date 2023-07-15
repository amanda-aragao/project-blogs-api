module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false,
    }, 
    title:
    {
      allowNull:false,
      type: DataTypes.STRING,
    },
    content:
    {
      allowNull:false,
      type: DataTypes.STRING,
    },
    userId:{
      allowNull:false,
      type: DataTypes.INTEGER,
      field: 'user_id',
      references:{
        model: 'users',
        key: 'id',
      },
    },
    published:{
      allowNull:false,
      type: DataTypes.DATE,
    },
    updated:{
      allowNull:false,
      type: DataTypes.DATE,
    }
  }, {
    timestamps: false,
    tableName:'blog_posts',
    underscored: true 
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return BlogPost;
};