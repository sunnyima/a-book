const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');
const bcrypt = require('bcrypt');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const City = sequelize.define('city', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    countryId: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
);
// create table with user model
City.sync()
    .then(() => console.log('Oh yeah! City table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

// create some helper functions to work on the database
const createCity = async ({ name }) => {
    return await City.create({ name });
};

const getAllCities = async () => {
    return await City.findAll();
};
const getAllCountryCities = async obj => {
    return await City.findAll({
        where: obj,
    });
};

const getCity = async obj => {
    return await City.findOne({
        where: obj,
    });
};

module.exports = {createCity, getAllCities, getAllCountryCities, getCity};