const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
let modules = {};
fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const module = require(path.join(__dirname, file));
    const name = file.match(/.+(?=\.js)/);
    modules[name] = module;
  });
module.exports = modules;
