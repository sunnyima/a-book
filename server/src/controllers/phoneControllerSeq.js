const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');
const bcrypt = require('bcrypt');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const Phone = sequelize.define('phone', {
    // attributes
    contactId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
);
// create table with phone model
Phone.sync()
    .then(() => console.log('Oh yeah! Phone table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

module.exports = {Phone};