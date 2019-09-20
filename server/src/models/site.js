const {Sequelize, sequelize} = require('./sequelize');
const Site = sequelize.define('sites', {
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
    url: {
        type: Sequelize.STRING,
        required: true,
    },
    comment: {
        type: Sequelize.STRING,
    },
}, {freezeTableName: true});

Site.sync();

module.exports = Site;