'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Farms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  User_Farms.init({
    users_id: DataTypes.INTEGER,
    farms_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Farms',
  });
  return User_Farms;
};