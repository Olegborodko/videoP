require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = new Sequelize(
    process.env.DEV_DB,
    process.env.DEV_DB_USER,
    process.env.DEV_DB_PASS,
{
    host: process.env.HOST || 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});