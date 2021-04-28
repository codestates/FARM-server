require('dotenv').config()
const env = process.env
const development = {
  username : env.DATABASE_USERNAME,
  password : env.DATABASE_PASSWORD,
  database : env.DATABASE_DATABASENAME,
  host : env.DATABASE_HOST,
  dialect : "mysql"
}
const production = {
}

module.exports = { development, production }