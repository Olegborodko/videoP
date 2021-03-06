require('dotenv').config();
const fs = require('fs');

module.exports = {
    development: {
        username: process.env.DEV_DB_USER,
        password: process.env.DEV_DB_PASS,
        database: process.env.DEV_DB,
        host: process.env.HOST,
        dialect: 'postgres',
        operatorsAliases: false
    },
    test: {
        username: process.env.DEV_DB_USER,
        password: process.env.DEV_DB_PASS,
        database: process.env.TEST_DB,
        host: process.env.HOST,
        dialect: 'postgres',
        operatorsAliases: false
    },
    // production: {
    //     username: process.env.DB_USERNAME,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     host: process.env.DB_HOSTNAME,
    //     dialect: 'postgres',
    //     dialectOptions: {
    //         ssl: {
    //             ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //         }
    //     }
    // }
};
