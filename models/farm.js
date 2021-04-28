"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Farm extends Model {
    static associate(models) {
      Farm.belongsToMany(models.User, { through: User_Farms });
      Farm.hasMany(models.Crop);
    }
  }
  Farm.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Farm",
    }
  );
  return Farm;
};
