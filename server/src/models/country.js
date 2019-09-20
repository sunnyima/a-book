const {Sequelize, sequelize} = require('./sequelize');

const Country = sequelize.define('countries', {
        // attributes
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {freezeTableName: true}
);
Country.sync();

module.exports = Country;