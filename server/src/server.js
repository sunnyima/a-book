"use strict";

// #region Vars
const express = require('express');
const bodyParser = require('body-parser');

const userController =  require ('./controllers/userControllerSeq');
const countryController = require('./controllers/countryControllerSeq');
const cityController = require('./controllers/cityControllerSeq');
const contactController = require('./controllers/contactControllerSeq');


const srv = require('./configs/configSRV');

const app = express();

/*const city = new City();
const contact = new Contact();
const country = new Country();
const email = new Email();
const im = new Im();
const org = new Org();
const person = new Person();
const phone = new Phone();
const user = new User();
const www = new Www();*/

const itemALL = 0;
const itemDefaultPerPage = 10;
const itemMAXPerPage = 50;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// #region Country
// Country - Получить список всех стран
// GET http://localhost/api/countries
// GET http://localhost/api/countries?page=5&limit=5
app.get('/api/countries', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    countryController.getAllCountries().then(country => res.json(country));
});

// Country - Получить детализацию страны по id
// GET http://localhost/api/countries/{id}
app.get('/api/countries/:id', function(req, res) {
    countryController.getCountry({id: req.params.id}).then(country => res.json(country));
});

/*// Country - Добавить страну
// POST http://localhost:8888/api/countries/add
// TODO
app.post('/api/countries/add', async (req, res) => {
    const result = country.add(req.body);
    res.send(result);
});*/

/*// Country - Изменить страну
// POST http://localhost:8888/api/countries/{id}/update
// TODO
app.post('/api/countries/:id/update', async (req, res) => {
    const result = await country.update(req.params.id,req.body);
    res.send(result);
});*/

/*// Country - Удалить страну по id
// DELETE http://localhost:8888/api/countries/{id}/delete
// TODO
app.delete('/api/countries/:id/delete', async (req, res) => {
    const result = await country.delete(req.params.id);
    res.send(result);
});*/
//#endregion Country

// #region City
// City - Получить список городов определенной страны
// GET http://localhost/api/countries/{countryId}/cities
app.get('/api/countries/:id/cities', function(req, res) {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    cityController.getAllCountryCities({countryId: req.params.id}).then(city => res.json(city));
});

// City - Получить детализацию города по id
// GET http://localhost/api/cities/{id}
app.get('/api/cities/:id', async (req, res) => {
    cityController.getCity({id: req.params.id}).then(city => res.json(city));
});

/*// City - Добавить город
// POST http://localhost/api/cities/add
// TODO
app.post('/api/cities/add', async (req, res) => {
    const result = city.add(req.body);
    res.send(result);
});*/

/*// City - Изменить город
// POST http://localhost/api/cities/{id}/update
//TODO
app.post('/api/cities/:id/update', async (req, res) => {
    const result = await city.update(req.params.id,req.body);
    res.send(result);
});*/

/*// City - Удалить город по id
// DELETE http://localhost/api/cities/{id}/delete
// TODO
app.delete('/api/cities/:id', async (req, res) => {
    const result = await city.delete(req.params.id);
    res.send(result);
});*/
//#endregion City

// #region Email
// Email - Получить список электронных адресов определенного контакта
// GET http://localhost/api/contacts/{contactId}/emails
// GET http://localhost/api/contacts/{contactId}/emails?page=5&limit=5
app.get('/api/contacts/:contactId/emails', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    contactController.getAllContactEmails({contactId: req.params.contactId}).then(email => res.json(email));
});

// Email - Получить детализацию электронного адреса по id
// GET http://localhost/api/contacts/{contactId}/emails/{id}
app.get('/api/contacts/:contactId/emails/:id', async (req, res) => {
    contactController.getOneContactEmail({contactId: req.params.contactId, id : req.params.id}).then(email => res.json(email));
});

/*// Email - Добавить электронный адрес
// POST http://localhost/api/contacts/{contactId}/emails/add
// TODO write added new email to contact
app.post('/api/contacts/:contactId/emails/add', async (req, res) => {
    const result = email.add(req.body);
    res.send(result);
});*/

/*// Email - Изменить электронный адрес
// POST http://localhost/api/contacts/{contactId}/emails/{id}/update
// TODO
app.post('/api/contacts/:contactId/emails/:id/update', async (req, res) => {
    const result = await email.update(req.params.id,req.body);
    res.send(result);
});*/

/*// Email - Удалить электронный адрес по id
// DELETE http://localhost/api/contacts/{contactId}/emails/{id}/delete
// TODO
app.delete('/api/contacts/:contactId/emails/:id/delete', async (req, res) => {
    const result = await email.delete(req.params.id);
    res.send(result);
});*/
//#endregion Email

// #region Phone
// Phone - Получить список телефонов определенного контакта
// GET http://localhost/api/contacts/{contactId}/phones
// GET http://localhost/api/contacts/{contactId}/phones?page=5&limit=5
app.get('/api/contacts/:contactId/phones', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    contactController.getAllContactPhones({contactId: req.params.contactId}).then(phone => res.json(phone));
});

// Phone - Получить детализацию номера телефона по id
// GET http://localhost/api/contacts/{contactId}/phones/{id}
app.get('/api/contacts/:contactId/phones/:id', async (req, res) => {
    contactController.getOneContactPhone({contactId: req.params.contactId, id : req.params.id}).then(phone => res.json(phone));
});

/*// Phone - Добавить номер телефона
// POST http://localhost/api/contacts/{contactId}/phones/add
// TODO write added new email to contact
app.post('/api/contacts/:contactId/phones/add', async (req, res) => {
    const result = email.add(req.body);
    res.send(result);
});*/

/*// Phone - Изменить номер телефона
// POST http://localhost/api/contacts/{contactId}/phones/{id}/update
// TODO
app.post('/api/contacts/:contactId/phones/:id/update', async (req, res) => {
    const result = await email.update(req.params.id,req.body);
    res.send(result);
});*/

/*// Phone - Удалить номер телефона по id
// DELETE http://localhost/api/contacts/{contactId}/phones/{id}/delete
// TODO
app.delete('/api/contacts/:contactId/phones/:id/delete', async (req, res) => {
    const result = await email.delete(req.params.id);
    res.send(result);
});*/
//#endregion Phone

// #region Site
// Site - Получить список веб-страниц определенного контакта
// GET http://localhost/api/contacts/{contactId}/sites
// GET http://localhost/api/contacts/{contactId}/sites?page=5&limit=5
app.get('/api/contacts/:contactId/sites', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    contactController.getAllContactSites({contactId: req.params.contactId}).then(site => res.json(site));
});

// Site - Получить детализацию веб-страницы по id
// GET http://localhost/api/contacts/{contactId}/sites/{id}
app.get('/api/contacts/:contactId/sites/:id', async (req, res) => {
    contactController.getOneContactSite({contactId: req.params.contactId, id : req.params.id}).then(site => res.json(site));
});

/*// Site - Добавить веб-страницу к контакту
// POST http://localhost/api/contacts/{contactId}/sites/add
// TODO write added new web-site to contact
app.post('/api/contacts/:contactId/sites/add', async (req, res) => {
    const result = email.add(req.body);
    res.send(result);
});*/

/*// Site - Изменить веб-страницу контакта
// POST http://localhost/api/contacts/{contactId}/sites/{id}/update
// TODO
app.post('/api/contacts/:contactId/sites/:id/update', async (req, res) => {
    const result = await email.update(req.params.id,req.body);
    res.send(result);
});*/

/*// Site - Удалить веб страницу контакта по id
// DELETE http://localhost/api/contacts/{contactId}/sites/{id}/delete
// TODO
app.delete('/api/contacts/:contactId/sites/:id/delete', async (req, res) => {
    const result = await email.delete(req.params.id);
    res.send(result);
});*/
//#endregion Site

// #region Im
// Im - Получить список месенджеров определенного контакта
// GET http://localhost/api/contacts/{contactId}/ims
// GET http://localhost/api/contacts/{contactId}/ims?page=5&limit=5
app.get('/api/contacts/:contactId/ims', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    contactController.getAllContactMesangres({contactId: req.params.contactId}).then(mesanger => res.json(mesanger));
});

// Im - Получить детализацию мессенджера контакта по id
// GET http://localhost/api/contacts/{contactId}/ims/{id}
app.get('/api/contacts/:contactId/ims/:id', async (req, res) => {
    contactController.getOneContactMesanger({contactId: req.params.contactId, id : req.params.id}).then(mesanger => res.json(mesanger));
});

/*// Im - Добавить мессанджер к контакту
// POST http://localhost/api/contacts/{contactId}/ims/add
// TODO write added new mesanger to contact
app.post('/api/contacts/:contactId/ims/add', async (req, res) => {
    const result = email.add(req.body);
    res.send(result);
});*/

/*// Im - Изменить определенный мессенджер контакта
// POST http://localhost/api/contacts/{contactId}/ims/{id}/update
// TODO
app.post('/api/contacts/:contactId/ims/:id/update', async (req, res) => {
    const result = await email.update(req.params.id,req.body);
    res.send(result);
});*/

/*// Im - Удалить мессенджер контакта по id
// DELETE http://localhost/api/contacts/{contactId}/ims/{id}/delete
// TODO
app.delete('/api/contacts/:contactId/ims/:id/delete', async (req, res) => {
    const result = await email.delete(req.params.id);
    res.send(result);
});*/
//#endregion Im


// #region Contact
// Contact - Получить список контактов определенного пользователя
// GET http://localhost/api/users/{userId}/contacts
// GET http://localhost/api/users/{userId}/contacts?page=5&limit=5
app.get('/api/users/:userId/contacts', async (req, res) => {
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту + поправить выборку контакпов по подзапросу
    contactController.getAllUserContacts({userId: req.params.userId}).then(contact => res.json(contact));
});


// Contact - Получить детализацию контакта по id
// GET http://localhost/api/contacts
app.get('/api/contacts', async (req, res) => {
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту
    contactController.getAllContacts().then(contact => res.json(contact));
});


// Contact - Получить детализацию контакта по id
// GET http://localhost/api/contacts/{id}
app.get('/api/contacts/:id', async (req, res) => {
    const result = await contact.details(req.params.id);
    res.send(result);
});

/*// Contact - Добавить контакт
// POST http://localhost/api/contacts
// TODO
app.post('/api/contacts/add', async (req, res) => {
    const result = contact.add(req.body);
    res.send(result);
});*/

/*// Contact - Изменить контакт
// POST http://localhost/api/contacts/{id}/update
// TODO
app.post('/api/contacts/:id/update', async (req, res) => {
    const result = await contact.update(req.params.id,req.body);
    res.send(result);
});*/

/*// Contact - Удалить контакт по id
// DELETE http://localhost/api/contacts/{id}/delete
// TODO
app.delete('/api/contacts/:id/delete', async (req, res) => {
    const result = await contact.delete(req.params.id);
    res.send(result);
});*/
//#endregion

// #region User
// User - Получить список пользователей
// GET http://localhos:8888/api/users
// GET http://localhost:8888/api/users/?page={page}&limit={limit}
app.get('/api/users', function(req, res) {
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту
    userController.getAllUsers().then(user => res.json(user));
});

// User - Получить детализацию пользователя по id
// GET http://localhost:8888/api/users/{id}
app.get('/api/users/:id', function(req, res) {
    userController.getUser({id: req.params.id}).then(user => res.json(user));
});

/*
// User - Изменить пользователя
// POST http://localhost:8888/api/users/{id}/update
// TODO
app.post('/api/users/:id/update', async (req, res) => {
    const result = await user.update(req.params.id,req.body);
    res.send(result);
});

// User - Удалить пользователя по id
// DELETE http://localhost:8888/api/users/{id}/delete
// TODO
app.delete('/api/users/:id/delete', async (req, res) => {
    const result = await user.delete(req.params.id);
    res.send(result);
});*/

// User - Добавить пользователя
// POST http://localhost:8888/api/users/register
app.post('/api/users/register', function(req, res, next) {
    const { name, password } = req.body;
    userController.createUser({ name, password }).then(user =>
        res.json({ user, msg: 'account created successfully' })
    );
});

// запуск сервера
app.listen(srv.PORT.value, ()=>{
    console.log(`Server started on ${srv.HOST.value}:${srv.PORT.value}`);
});