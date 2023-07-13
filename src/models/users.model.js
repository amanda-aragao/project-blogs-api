module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName:'users',
    underscored: true // só pra garantir
  });

  return User;
};