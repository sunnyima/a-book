const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');
const bcrypt = require('bcrypt');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const Mesanger = sequelize.define('mesager', {
    // attributes
    contactId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    mesanger: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
    },
},
);
// create table with phone model
Mesanger.sync()
    .then(() => console.log('Oh yeah! Mesanger table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

module.exports = {Mesanger};