const Contact = require('../models/contact');
const Email = require('../models/email');
const Site = require('../models/site');

Contact.hasMany(Email, {foreignKey: 'contactId', as: 'emails'});
Contact.hasMany(Site, {foreignKey: 'contactId', as: 'sites'});

// #Contacts
/**
 * создать контакт
 * @param name
 * @returns {Promise<*>}
 */
const createContact = async ({ userId, title }) => {
    return await Contact.create({ userId, title });
};

/**
 * выборка всех контактов
 * @returns {Promise<*>}
 */
const getAllContacts = async () => {
    return await Contact.findAll();
};


/**
 * Получить данные одного контакта
 * @param obj
 * @returns {Promise<*>}
 */
const getContact = async obj => {
    return await Contact.findOne({
        where: obj,
    });
};

// #User contacts
/**
 * Получить список контактов пользователя
 * @param obj
 * @returns {Promise<void>}
 */
const getAllUserContacts = async obj => {
    await Contact.findAll({
        where: obj,
    });
};


/**
 * Получить список  полных контактов пользователя
 * @param obj
 * @returns {Promise<void>}
 */
const getAllUserFullContacts = async obj => {
    await Contact.findAll({
        where: obj,
        include: [
            {model: Email, as: 'emails'},
            {model: Site, as: 'sites'},
        ],
    });
};

/**
 * получить данные одного контакта
 * @param obj
 * @returns {Promise<void>}
 */
const getOneUserContact = async obj => {
    return await UserContact.findOne({
        where: obj,
    });
};

/**
 * получить полные данные одного контакта
 * @param obj
 * @returns {Promise<*>}
 */
const getFullContact = async obj => {
    return await Contact.findOne({
        where: obj,
        include: [
            {model: Email, as: 'emails'},
            {model: Site, as: 'sites'},
        ],
    });
};

/**
 * обновить данные контакта
 * @param obj
 * @returns {Promise<void>}
 */
const updateContact = async (where,obj) => {
    return await UserContact.update({
        where: where,
        obj
    });
};

/**
 * обновить данные контакта
 * @param obj
 * @returns {Promise<void>}
 */
const deleteContact = async obj => {
    return await UserContact.delete({
        where: obj,
    });
};
// endContacts


module.exports = {
                    createContact,
                    getFullContact,
                    getOneUserContact,
                    getAllUserContacts,
                    getAllUserFullContacts,
                    getContact,
                    getAllContacts,
                    deleteContact,
                    updateContact,
};
