require("dotenv").config();
const env = process.env;
const development = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DEV_DBNAME,
  host: env.HOST,
  port: env.PORT,
  dialect: "mysql",
};
const production = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.PROD_DBNAME,
  host: env.HOST,
  port: env.PORT,
  dialect: "mysql",
};

const localdev = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DEV_DBNAME,
  dialect: "mysql",
};

module.exports = { development, production, localdev };
