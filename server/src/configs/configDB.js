const mysql = require('mysql');
const options = {
    host: 'localhost',
    database: 'abookDB',
    user: 'root',
    password : 'mysql'
};
var pool = mysql.createPool(options);

module.exports = pool;