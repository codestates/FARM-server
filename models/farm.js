"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Farm extends Model {
    static associate(models) {
      Farm.belongsToMany(models.User, {
        through: "User_Farms",
        foreignKey: "farms_id",
      });
      Farm.hasMany(models.Crop, {
        foreignKey: "farms_id",
      });
    }
  }
  Farm.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Farm",
    }
  );
  return Farm;
};
