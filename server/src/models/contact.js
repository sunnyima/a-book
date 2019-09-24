const {Sequelize, sequelize} = require('./sequelize');
const Contact = sequelize.define('contacts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    title: {
        type: Sequelize.STRING,
    },
}, {freezeTableName: true});

Contact.sync();

module.exports = Contact;