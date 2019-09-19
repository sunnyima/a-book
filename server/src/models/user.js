'use strict';
const {Sequelize, sequelize} = require('./sequelize');
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    mobileNumber: {
        type: Sequelize.STRING,
        field: 'mobile_number'
    },
    status: {
        type: Sequelize.STRING
    },
}, {freezeTableName: true});

User.sync();

module.exports = User;

