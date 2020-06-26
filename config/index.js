require('dotenv').config()

const config = {
  PORT: process.env.PORT,
  DB_CLIENT: process.env.CLIENT,
  DB_DATABASE: process.env.DATABASE,
  DB_PG_USER: process.env.PG_USER,
  DB_PASSWORD: process.env.PASSWORD,
  DB_HOST: process.env.HOST,
  DB_PG_PORT: process.env.PG_PORT,
}

module.exports = config