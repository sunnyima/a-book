const Sequelize = require('sequelize');
const {configDB} = require('../configs/configDB');

// initialize an instance of Sequelize
const sequelize = new Sequelize(configDB);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));