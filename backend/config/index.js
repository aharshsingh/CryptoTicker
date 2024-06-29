const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    API_URL : process.env.API_URL,
    APP_PORT : process.env.APP_PORT,
    DB_URL : process.env.DB_URL
}