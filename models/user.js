"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Farm, {
        through: "User_Farms",
        foreignKey: "users_id",
      });
      User.hasMany(models.Seed, {
        foreignKey: "users_id",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
