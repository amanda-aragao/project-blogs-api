module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
    tableName:'categories',
    underscored: true // só pra garantir
  });

  return Category;
};