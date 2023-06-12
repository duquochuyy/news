'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Writer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Writer.belongsTo(models.User,{foreignKey:'userId'});
      Writer.hasMany(models.Article,{foreignKey:'authorId'});
    }
  }
  Writer.init({
    pseudonyn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Writer',
  });
  return Writer;
};