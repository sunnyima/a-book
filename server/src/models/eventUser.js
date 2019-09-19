// eventUser.js
const {Sequelize, sequelize} = require('./sequelize');
const User      = require('./user');
const Event     = require('./event');

const EventUser = sequelize.define('eventuser', {
        eventuserid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: "id",
            }
        },
        event_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "event",
                key: "eventid",
            }
        },
        reservationConfirmation:{
            type:Sequelize.BOOLEAN,
        },
        attendance:{
            type:Sequelize.BOOLEAN
        },
    },
    {
        freezeTableName: true
    });

//___________________Establish relationships with other tables_________

//EventUser.hasMany(User, {foreignKey:id});
//EventUser.hasMany(Event, {forignKey:eventid});
//__________________________Create table_______________________
EventUser.sync( /*{force: true}*/ ).then(function () {
    return EventUser.create({
        eventuserid:1,
        event_id:1,
        user_id: 1,
        reservationConfirmation: true,
        attendance: true
    });
}).then(c => {
    console.log("Created", c.toJSON());
}).catch(e => console.error(e));
//___________________________________________________

User.belongsToMany(Event, { through: EventUser } );
Event.belongsToMany(User, { through: EventUser } );

module.exports = EventUser;