const mysql = require('mysql');
const options = {
    host: 'db4free.net',
    database: 'abookdb',
    port: 3306,
    username: 'abookdb',
    password : 'FeD4d1QOCV',
    dialect : 'mysql',
};
const pool = mysql.createPool(options);
const connection = mysql.createConnection(options);

module.exports = {pool, connection,options};