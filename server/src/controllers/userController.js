const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));
// create user model
const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
});
// create table with user model
User.sync()
    .then(() => console.log('Oh yeah! User table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

// create some helper functions to work on the database
const createUser = async ({ name, password }) => {
    return await User.create({ name, password });
};

const getAllUsers = async () => {
    return await User.findAll();
};

const getUser = async obj => {
    return await User.findOne({
        where: obj,
    });
};

module.exports = {createUser, getAllUsers, getUser};