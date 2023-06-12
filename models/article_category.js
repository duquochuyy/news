'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Article_Category.belongsTo(models.Article,{foreignKey:'articleId'});
      Article_Category.belongsTo(models.Category,{foreignKey:'categoryId'});
    }
  }
  Article_Category.init({
  }, {
    sequelize,
    modelName: 'Article_Category',
  });
  return Article_Category;
};