const User = require('../models/user');
const Contact = require('../models/contact');
User.hasMany(Contact, {foreignKey: 'userId', as: 'contacts'});
//Contact.hasMany(Email, {foreignKey: 'channel_fk', as: 'emails'});


// create some helper functions to work on the database
const createUser = async ({ password, username, email, mobileNumber, status }) => {
    return await User.create({ password, username, email, mobileNumber, status });
};

/**
 * Получить список всех пользователей
 * @returns {Promise<void>}
 */
const getAllUsers = async () => {
    return await User.findAll();
};

/**
 * Все юзеры с контактами
 * @returns {Promise<void>}
 */
const getAllUsersWithContacts = async () => {
    return await User.findAll({
        include: [
            {model: Contact, as: 'contacts'},
        ]
    });
};

/**
 * данные одного пользователя
 * @param obj
 * @returns {Promise<*>}
 */
const getUser = async obj => {
    return await User.findOne({
        where: obj,
    });
};

/**
 * данные одного пользователя вместе с контактами
 * @param obj
 * @returns {Promise<*>}
 */
const getUserWithContacts = async obj => {
    return await User.findOne({
        where: obj,
        include: [{model: Contact, as: 'contacts'}]
    });
};

/**
 * удалить одного пользователя
 * @param obj
 * @returns {Promise<*>}
 */
const deleteUser = async obj => {
    return await User.findOne({
        where: obj,
    });
};

/**
 * редактировать данные одного пользователя
 * @param obj
 * @returns {Promise<*>}
 */
const updateUser = async obj => {
    return await User.findOne({
        where: obj,
    });
};


module.exports = {
                    createUser,
                    getAllUsers,
                    getUser,
                    getAllUsersWithContacts,
                    getUserWithContacts,
                    updateUser,
                    deleteUser,
                };