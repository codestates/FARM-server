"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seed extends Model {
    static associate(models) {
      Seed.belongsTo(models.Crop, {
        foreignKey: "crops_id",
      });
      Seed.belongsTo(models.User, {
        foreignKey: "users_id",
      });
    }
  }
  Seed.init(
    {
      name: DataTypes.STRING,
      crops_id: DataTypes.INTEGER,
      users_id: DataTypes.INTEGER,
      isHarvested: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Seed",
    }
  );
  return Seed;
};
