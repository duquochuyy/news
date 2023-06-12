'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article_Tag.belongsTo(models.Article,{foreignKey:'articleId'});
      Article_Tag.belongsTo(models.Tag,{foreignKey:'tagId'});
    }
  }
  Article_Tag.init({
  }, {
    sequelize,
    modelName: 'Article_Tag',
  });
  return Article_Tag;
};