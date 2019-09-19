const User = require('../models/user');
const UsersContactsLists = require('../models/contact');

User.hasMany(UsersContactsLists, {foreignKey: 'channel_fk', as: 'contacts'});


// create some helper functions to work on the database
const createUser = async ({ login, password, firstName, lastName }) => {
    return await User.create({ login, password, firstName, lastName });
};

const getAllUsers = async () => {

    User.findAll({
        include: [{model: UsersContactsLists, as: 'contacts'}]
    }).then(function (result) {
        console.log(JSON.stringify(result));
    });
};

const getUser = async obj => {
    return await User.findOne({
        where: obj,
    });
};


module.exports = {createUser, getAllUsers, getUser};