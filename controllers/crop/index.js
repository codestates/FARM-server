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
    //db.users와 같이 db 객체 내부에 모델 인스(.*?)\.js턴스를 저장합니다.
    modules[name] = module;
  });
module.exports = modules;

