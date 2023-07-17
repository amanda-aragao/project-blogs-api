module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:
    {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    }, 
    displayName:{
     type: DataTypes.STRING,
     allowNull: false,
     field: 'display_name',
    }, 
      
    email:{
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,

    }, 
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName:'users',
    underscored: true // só pra garantir
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogpost' });
  };

  return User;
}