'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Crop.init({
    name: DataTypes.STRING,
    farms_id: DataTypes.INTEGER,
    kinds_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Crop',
  });
  return Crop;
};