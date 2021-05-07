"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "kimcoding@gmail.com",
        name: "kimcoding",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "parkhacker@gmail.com",
        name: "parkhacker",
        password: "4321",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "choistates@hanmail.net",
        name: "choistates",
        password: "asdf9900",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "LeeSin@naver.com",
        name: "LeeSin",
        password: "wheretogo18",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "Singed@icloud.com",
        password: "89898989",
        name: "Singed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "malphite@naver.com",
        password: "badphite1!",
        name: "malphite",
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
        icon: "🍎",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "greenapple",
        icon: "🍏",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "pear",
        icon: "🍐",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "orange",
        icon: "🍊",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lemon",
        icon: "🍋",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "watermelon",
        icon: "🍉",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "grape",
        icon: "🍇",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "strawberry",
        icon: "🍓",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "melon",
        icon: "🍈",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cherry",
        icon: "🍒",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "peach",
        icon: "🍑",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "pineapple",
        icon: "🍍",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kiwi",
        icon: "🥝",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tomato",
        icon: "🍅",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "eggplant",
        icon: "🍆",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "avocado",
        icon: "🥑",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "broccoli",
        icon: "🥦",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cucumber",
        icon: "🥒",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "chili",
        icon: "🌶",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "greenpepper",
        icon: "🫑",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "corn",
        icon: "🌽",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "carrot",
        icon: "🥕",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "garlic",
        icon: "🧄",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "onion",
        icon: "🧅",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "potato",
        icon: "🥔",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "sweetpotato",
        icon: "🍠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Crops", [
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
        crops_id: 1,
        users_id: 2,
        isHarvested: true,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "memo",
        crops_id: 1,
        isHarvested: true,
        isAssigned: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "dispatch",
        crops_id: 2,
        users_id: 2,
        isHarvested: true,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "reducer",
        crops_id: 2,
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
        crops_id: 4,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Key",
        crops_id: 4,
        users_id: 2,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysql",
        crops_id: 4,
        users_id: 3,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MongoDb",
        crops_id: 4,
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
        crops_id: 3,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MiddleWare",
        crops_id: 3,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Router",
        crops_id: 3,
        users_id: 1,
        isHarvested: false,
        isAssigned: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "UrlParams",
        crops_id: 3,
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
    await queryInterface.bulkDelete("Crops", null);
    await queryInterface.bulkDelete("User_Farms", null);
  },
};
