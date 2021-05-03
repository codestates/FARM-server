const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
let modules = {};
fs.readdirSync(__dirname)
  .filter((dir) => {
    return dir !== basename && !dir.includes(".");
  })
  .forEach((dir) => {
    const module = require(path.join(__dirname, dir));
    modules[dir] = module;
  });
module.exports = modules;
