'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(models.Writer,{foreignKey:'authorId'});
      Article.hasMany(models.Comment,{foreignKey:'articleId'});
      Article.belongsToMany(models.Tag,{through:'Article_Tag',foreignKey:'articleId',otherKey:'tagId'});
      Article.belongsToMany(models.Category,{through:'Article_Category',foreignKey:'articleId',otherKey:'categoryId'});
    }
  }
  Article.init({
    title: DataTypes.TEXT,
    abstract: DataTypes.TEXT,
    mainImg: DataTypes.STRING,
    content: DataTypes.TEXT,
    createDate: DataTypes.DATE,
    publishDate: DataTypes.DATE,
    views: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};