"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {
    static associate(models) {
      Crop.hasMany(models.Seed, {
        foreignKey: "crops_id",
      });
      Crop.belongsTo(models.Farm, {
        foreignKey: "farms_id",
      });
      Crop.belongsTo(models.Kind, {
        foreignKey: "kinds_id",
      });
    }
  }
  Crop.init(
    {
      name: DataTypes.STRING,
      farms_id: DataTypes.INTEGER,
      kinds_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Crop",
    }
  );
  return Crop;
};
