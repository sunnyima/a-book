const {Sequelize, sequelize} = require('./sequelize');
const Contact = sequelize.define('users_contacts_lists', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id'
    },
    mobileNumber: {
        type: Sequelize.STRING,
        field: 'mobile_number', defaultValue: 0
    }
}, {freezeTableName: true});

Contact.sync();

module.exports = Contact;