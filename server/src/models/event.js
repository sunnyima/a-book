// event.js
const {Sequelize, sequelize} = require('./sequelize');

const Event = sequelize.define('event', {
    eventid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: Sequelize.DATE
    },
    title: {
        type: Sequelize.STRING,
    },
    event_id: { //Foreign Key . Do I even need to put it here at all?
        type: Sequelize.INTEGER,
        references: {
            model: "event_user",
            key: "event_id" // Surely here I do something wrong!!
        }
    },

}, {
    freezeTableName: true
});
//____________Establish relationships with other tables_________

//Event.belongsTo(EventUser, {foreignKey: event_id});

//________________________Create table____________
Event.sync().then(function () {

    return Event.create({
        eventid:1,
        title: 'Event1',
        date: new Date(24, 9, 2016),
        event_id: 1,
    });
}).then(c => {
    console.log("Created event", c.toJSON());
}).catch(e => console.error(e));

//________________________________________________________

module.exports = Event;
