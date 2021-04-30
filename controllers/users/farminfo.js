const { User, Farm } = require("../../models");
const { isAuthorized } = require("../token");
const crypto = require("crypto");

module.exports = (req, res) => {
  // ! feature 7
  const tokenData = isAuthorized(req);
  console.log(tokenData);
};
