'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seed.belongsTo(models.SeedType)
      Seed.belongsTo(models.User)
    }
  };
  Seed.init({
    name: DataTypes.STRING,
    seeds_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    isHarvested: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seed',
  });
  return Seed;
};