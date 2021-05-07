"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Kinds", null);
  },
};
