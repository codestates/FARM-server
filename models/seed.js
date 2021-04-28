"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seed extends Model {
    static associate(models) {
      // define association here
      Seed.belongsTo(models.Crop);
      Seed.belongsTo(models.User);
    }
  }
  Seed.init(
    {
      name: DataTypes.STRING,
      seeds_id: DataTypes.INTEGER,
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
