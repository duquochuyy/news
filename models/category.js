'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsTo(models.Category, { as: 'parent', foreignKey: 'parentId' });
      Category.hasMany(models.Category, { as: 'children', foreignKey: 'parentId' });
      Category.belongsTo(models.Editor, { foreignKey: 'managerId' });
      Category.belongsToMany(models.Article, { through: 'Article_Category', foreignKey: 'categoryId', otherKey: 'articleId' });
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};