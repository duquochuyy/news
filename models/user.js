'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Subscriber,{foreignKey:'userId'});
      User.hasOne(models.Writer,{foreignKey:'userId'});
      User.hasOne(models.Editor,{foreignKey:'userId'});
      User.hasOne(models.Admin,{foreignKey:'userId'});
      User.hasMany(models.Comment,{foreignKey:'userId'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    usename: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    birthday: DataTypes.DATE,
    facebook: DataTypes.STRING,
    zalo: DataTypes.STRING,
    google: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};