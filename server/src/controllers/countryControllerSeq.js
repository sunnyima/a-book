const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');
const bcrypt = require('bcrypt');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const Country = sequelize.define('country', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
);
// create table with country model
Country.sync()
    .then(() => console.log('Oh yeah! Country table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

// create some helper functions to work on the database
const createCountry = async ({ name }) => {
    return await Country.create({ name });
};

const getAllCountries = async () => {
    return await Country.findAll();
};

const getCountry = async obj => {
    return await Country.findOne({
        where: obj,
    });
};

module.exports = {createCountry, getAllCountries, getCountry};