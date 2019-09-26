const {Sequelize, sequelize} = require('./sequelize');
const Email = sequelize.define('emails', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    contactId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'contacts',
            key: 'id',
        },
    },
    email: {
        type: Sequelize.STRING,
        required: true,
    },
    comment: {
        type: Sequelize.STRING,
    },
}, {freezeTableName: true});

Email.sync();

module.exports = Email;