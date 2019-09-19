const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const ContactModel = require('../models/contactModel');
const EmailModel = require('../models/emailModel');

EmailModel.belongsTo(ContactModel); // Will also add userId to Task model
ContactModel.hasMany(EmailModel); // Will add userId to Task model

sequelize.sync()
    .then(() => {
        // this is where we continue ...
        console.log('Oh yeah! Contact table created successfully')
    })
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));



// #emails
/*const createContactEmail = async ({ email, contactId }) => {
    return await Email.create({ email, contactId });
};
const getAllContactEmails = async (obj) => {
    return await Email.findAll({
            where: obj,
        }
    );
};
const getOneContactEmail = async obj => {
    return await Email.findOne({
        where: obj,
    });
};*/
//end emails

// #phones
/*const createContactPhone = async ({ phone, contactId }) => {
    return await Phone.create({ phone, contactId });
};
const getAllContactPhones = async (obj) => {
    return await Phone.findAll({
            where: obj,
        }
    );
};
const getOneContactPhone = async obj => {
    return await Phone.findOne({
        where: obj,
    });
};*/
// endPhones

// #Sites
/*const createContactSite = async ({ url, contactId }) => {
    return await Site.create({ url, contactId });
};
const getAllContactSites = async (obj) => {
    return await Site.findAll({
            where: obj,
        }
    );
};
const getOneContactSite = async obj => {
    return await Site.findOne({
        where: obj,
    });
};*/
// endSites

// #Ims
/*const createContactMesanger = async ({ url, contactId }) => {
    return await Mesanger.create({ url, contactId });
};
const getAllContactMesangres = async (obj) => {
    return await Mesanger.findAll({
            where: obj,
        }
    );
};
const getOneContactMesanger = async obj => {
    return await Mesanger.findOne({
        where: obj,
    });
};*/
// endIms


// #Contacts
/*const createContact = async ({ name }) => {
    return await Contact.create({ name });
};*/
const getAllContacts = async () => {
    return await ContactModel.findAll({ include: [ EmailModel ] });/*.then(contact => {
        console.log(JSON.stringify(contact))

        /!*
          [{
            "name": "A Task",
            "id": 1,
            "createdAt": "2013-03-20T20:31:40.000Z",
            "updatedAt": "2013-03-20T20:31:40.000Z",
            "userId": 1,
            "user": {
              "name": "John Doe",
              "id": 1,
              "createdAt": "2013-03-20T20:31:45.000Z",
              "updatedAt": "2013-03-20T20:31:45.000Z"
            }
          }]
        *!/
    })*/
};
/*const getContact = async obj => {
    return await Contact.findOne({
        where: obj,
    });
};*/

// #User contacts
/*const getAllUserContacts = async obj => {
    await Contact.findAll({
        where: obj,
    });
};
const getOneUserContact = async obj => {
    return await UserContact.findOne({
        where: obj,
    });
};*/
// endUserContacts
// endContacts

module.exports = {  createContact,
                    createContactEmail,
                    createContactPhone,
                    createContactSite,
                    createContactMesanger,

                    getAllContacts,
                    getContact,

                    getAllUserContacts,
                    getOneUserContact,

                    getAllContactEmails,
                    getOneContactEmail,

                    getAllContactPhones,
                    getOneContactPhone,

                    getAllContactSites,
                    getOneContactSite,

                    getAllContactMesangres,
                    getOneContactMesanger,
};