module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Category', {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false,
    }, 
    name:{
      allowNull:false,
      type: DataTypes.STRING,
    }

  }, {
    timestamps: false,
    tableName:'users',
    underscored: true // só pra garantir
  });

  return User;
};