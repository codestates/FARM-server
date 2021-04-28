"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "kimcoding@gmail.com",
        name: "kimcoding",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "parkhacker@gmail.com",
        name: "parkhacker",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "choistates@hanmail.net",
        name: "choistates",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "LeeSin@naver.com",
        name: "LeeSin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "Singed@icloud.com",
        name: "Singed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "malphite@naver.com",
        name: "malhpite",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Farms", [
      {
        name: "Back",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Front",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Kinds", [
      {
        name: "apple",
        icon: "img1235",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "pear",
        icon: "img1435",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kiwi",
        icon: "img5235",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "grape",
        icon: "img9235",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("SeedTypes", [
      {
        name: "React",
        farms_id: 2,
        kinds_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Redux",
        farms_id: 2,
        kinds_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "express",
        farms_id: 1,
        kinds_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "databases",
        farms_id: 1,
        kinds_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Seeds", [
      {
        name: "useEffect",
        seedtypes_id: 1,
        users_id: 2,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "memo",
        seedtypes_id: 1,
        isHarvested: false,
        isAssigned: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "dispatch",
        seedtypes_id: 2,
        users_id: 2,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "reducer",
        seedtypes_id: 2,
        users_id: 5,
        isHarvested: true,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Seeds", [
      {
        name: "ORM",
        seedtypes_id: 4,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Key",
        seedtypes_id: 4,
        users_id: 2,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysql",
        seedtypes_id: 4,
        users_id: 3,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MongoDb",
        seedtypes_id: 4,
        users_id: 4,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Seeds", [
      {
        name: "Cors",
        seedtypes_id: 3,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MiddleWare",
        seedtypes_id: 3,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Router",
        seedtypes_id: 3,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "UrlParams",
        seedtypes_id: 3,
        isHarvested: false,
        isAssigned: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("User_Farms", [
      {
        users_id: 1,
        farms_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 2,
        farms_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 3,
        farms_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 4,
        farms_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 2,
        farms_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 5,
        farms_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null);
    await queryInterface.bulkDelete("Farms", null);
    await queryInterface.bulkDelete("Kinds", null);
    await queryInterface.bulkDelete("Seeds", null);
    await queryInterface.bulkDelete("SeedTypes", null);
    await queryInterface.bulkDelete("User_Farms", null);
  },
};
