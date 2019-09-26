// sequelize.js
const Sequelize = require('sequelize');
const {options} = require('../../src/configs/configDB');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = {Sequelize, sequelize};