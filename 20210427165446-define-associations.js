"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("User_Farms", {
      name: "Users-User_Farms",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("User_Farms", {
      name: "Farms-User_Farms",
      fields: ["farms_id"],
      type: "foreign key",
      references: {
        table: "Farms",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Crops", {
      name: "Farms-Crops",
      fields: ["farms_id"],
      type: "foreign key",
      references: {
        table: "Farms",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Crops", {
      name: "Kind-SeedType",
      fields: ["kinds_id"],
      type: "foreign key",
      references: {
        table: "Kinds",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Seeds", {
      name: "Crops-Seeds",
      fields: ["crops_id"],
      type: "foreign key",
      references: {
        table: "Crops",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Seeds", {
      name: "Users-Seeds",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("User_Farms", "Users-User_Farms");
    await queryInterface.removeConstraint("User_Farms", "Farms-User_Farms");
    await queryInterface.removeConstraint("Crops", "Farms-Crops");
    await queryInterface.removeConstraint("Crops", "Kind-SeedType");
    await queryInterface.removeConstraint("Seeds", "Crops-Seeds");
    await queryInterface.removeConstraint("Seeds", "Users-Seeds");
  },
};
