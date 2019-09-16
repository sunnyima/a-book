const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');
const bcrypt = require('bcrypt');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const User = sequelize.define('user', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
});
// create table with user model
User.sync()
    .then(() => console.log('Oh yeah! User table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

// create some helper functions to work on the database
const createUser = async ({ login, password, firstName, lastName }) => {
    return await User.create({ login, password, firstName, lastName });
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