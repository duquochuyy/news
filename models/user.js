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
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    birthday: DataTypes.DATE,
    password: DataTypes.STRING,
    facebook: DataTypes.STRING,
    zalo: DataTypes.STRING,
    google: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
