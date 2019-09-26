const {Sequelize, sequelize} = require('./sequelize');

const City = sequelize.define('cities', {
        // attributes
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        countryId: {
            type: Sequelize.INTEGER,
            required: true,
            references: {
                model: 'countries',
                key: 'id',
            },
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {freezeTableName: true}
);
City.sync();

module.exports = City;