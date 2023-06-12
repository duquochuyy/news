'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Editor.belongsTo(models.User,{foreignKey:'userId'});
      Editor.hasMany(models.Category,{foreignKey:'managerId'});
    }
  }
  Editor.init({
  }, {
    sequelize,
    modelName: 'Editor',
  });
  return Editor;
};