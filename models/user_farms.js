"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Farms extends Model {
    static associate(models) {}
  }
  User_Farms.init(
    {
      users_id: DataTypes.INTEGER,
      farms_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_Farms",
    }
  );
  return User_Farms;
};
