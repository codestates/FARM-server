require("dotenv").config();
const env = process.env;
const development = {
  username: env.DEV_USERNAME,
  password: env.DEV_PASSWORD,
  database: env.DEV_DBNAME,
  dialect: "mysql",
};
const production = {
  username: env.PROD_USERNAME,
  password: env.PROD_PASSWORD,
  database: env.PROD_DBNAME,
  host: env.PROD_HOST,
  port: env.PROD_PORT,
  dialect: "mysql",
};

module.exports = { development, production };
