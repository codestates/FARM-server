"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kind extends Model {
    static associate(models) {
      Kind.hasMany(models.SeedType);
    }
  }
  Kind.init(
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kind",
    }
  );
  return Kind;
};
