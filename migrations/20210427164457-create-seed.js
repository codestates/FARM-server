'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      seedtypes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      users_id: {
        type: Sequelize.INTEGER,
      },
      isAssigned : {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false 
      },
      isHarvested: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Seeds');
  }
};