"use strict";

// #region Vars
const express = require('express');
const bodyParser = require('body-parser');

// controllers
const userController =  require ('./controllers/userControllerSeq');
const countryController = require('./controllers/countryControllerSeq');
const cityController = require('./controllers/cityControllerSeq');
const contactController = require('./controllers/contactControllerSeq');
// config
const srv = require('./configs/configSRV');

const app = express();

//
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
    const result = await countryController.getAllCountries().then(country => res.json(country));
});

// #region Country
// Country - Получить список всех стран
// GET http://localhost/api/countries
// GET http://localhost/api/countries?page=5&limit=5
app.get('/api/countries/cities', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    const result = await countryController.getAllCountriesWithCities().then(country => res.json(country));
});

// Country - Получить детализацию страны по id
// GET http://localhost/api/countries/{id}
app.get('/api/countries/:id', async (req, res) =>{
    const result = await countryController.getCountry({id: req.params.id}).then(country => res.json(country));
});

// Country - Получить детализацию страны по id
// GET http://localhost/api/countries/{id}
app.get('/api/countries/:id/cities', async (req, res) =>{
    const result = await countryController.getCountryWithCities({id: req.params.id}).then(country => res.json(country));
});
// Country - Добавить страну
// POST http://localhost:8888/api/countries/add
// TODO
app.get('/api/countries/add', async (req, res) => {
    const result = await countryController.createCountry({country : req.body.country});
});

// Country - Изменить страну
// POST http://localhost:8888/api/countries/{id}/update
// TODO
app.get('/api/countries/:id/update', async (req, res) => {
    const result = await countryController.updateCountry({id:req.params.id}, {country : req.body.country});
});

// Country - Удалить страну по id
// DELETE http://localhost:8888/api/countries/{id}/delete
// TODO
app.get('/api/countries/:id/delete', async (req, res) => {
    const result = await countryController.deleteCountry({id:req.params.id});
});
//#endregion Country

// #region City
// City - Получить список городов определенной страны
// GET http://localhost/api/countries/{countryId}/cities
app.get('/api/countries/:id/cities', async (req, res) => {
    //TODO query by limit
    //let page = parseInt(req.query.page, 10);
    //let limit = parseInt(req.query.limit, 10);
    const result = await cityController.getAllCountryCities({countryId: req.params.id}).then(city => res.json(city));
});

// City - Получить детализацию города по id
// GET http://localhost/api/cities/{id}
app.get('/api/cities/:id', async (req, res) => {
    const result = await cityController.getCity({id: req.params.id}).then(city => res.json(city));
});

// City - Добавить город
// GET http://localhost/api/cities/add
// TODO
app.get('/api/cities/add', async (req, res) => {
    const {countryId, city} = req.body;
    const result = await cityController.createCity({countryId, city});
});

// City - Изменить город
// GET http://localhost/api/cities/{id}/update
//TODO
app.get('/api/cities/:id/update', async (req, res) => {
    const {countryId, city} = req.body;
    const result = await cityController.updateCity({id:req.params.id}, {countryId, city});
});

// City - Удалить город по id
// DELETE http://localhost/api/cities/{id}/delete
// TODO
app.delete('/api/cities/:id', async (req, res) => {
    const result = await cityController.deleteCity({id:req.params.id});
});
//#endregion City

//---------------------------------------------------------------------------------------------------------------------
// #region Contact
// Contact - Получить список контактов определенного пользователя
// GET http://localhost/api/users/{userId}/contacts
// GET http://localhost/api/users/{userId}/contacts?page=5&limit=5
app.get('/api/users/:userId/contacts', async (req, res) => {
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту + поправить выборку контакпов по подзапросу
    const result = await contactController.getOneUserContacts({userId: req.params.userId}).then(contact => res.json(contact));
});


// Contact - Получить детализацию контакта по id
// GET http://localhost/api/contacts
app.get('/api/contacts', async (req, res) => {
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту
    const result =  await contactController.getAllContacts().then(contact => res.json(contact));
});

// Contact - Получить данные контакта по id
// GET http://localhost/api/contacts/{id}
app.get('/api/contacts/:id', async (req, res) => {
    const result = await contactController.getContact({id: req.params.id}).then(contact => res.json(contact));
});

// Contact - Получить детализацию контакта по id
// GET http://localhost/api/contacts/{id}
app.get('/api/contacts/:id/full', async (req, res) => {
    const result = await contactController.getFullContact({id: req.params.id}).then(contact => res.json(contact));
});

// Contact - Добавить контакт
// GET http://localhost/api/contacts
// TODO
app.get('/api/contacts/add', async (req, res) => {
    const {userId,title} = req.body;
    const result = await contactController.createContact({userId,title});
});

// Contact - Изменить контакт
// GET http://localhost/api/contacts/{id}/update
// TODO
app.get('/api/contacts/:id/update', async (req, res) => {
    const {userId,title} = req.body;
    const result = await contactController.updateContact({id:req.params.id},{userId,title});
});

// Contact - Удалить контакт по id
// DELETE http://localhost/api/contacts/{id}/delete
// TODO
app.get('/api/contacts/:id/delete', async (req, res) => {
    const result = await contactController.deleteContact({id: req.params.id});
});
//#endregion

// #region User
// User - Получить список пользователей
// GET http://localhos:8888/api/users
// GET http://localhost:8888/api/users/?page={page}&limit={limit}
app.get('/api/users', async (req, res) => {
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту
    const result = await userController.getAllUsers().then(user => res.json(user));
});
app.get('/api/users/contacts', async (req, res) =>{
    //let page = req.query.page ? parseInt(req.query.page, 10) : 1;
    //let limit = req.query.limit ? parseInt(req.query.limit, 10) : 0;
    //TODO доделать выборку по лимиту
    const result = await userController.getAllUsersWithContacts().then(user => res.json(user));
});

// User - Получить детализацию пользователя по id
// GET http://localhost:8888/api/users/{id}
app.get('/api/users/:id', async (req, res) => {
    const result = await userController.getUser({id: req.params.id}).then(user => res.json(user));
});

// User - Изменить пользователя
// GET http://localhost:8888/api/users/{id}/update
// TODO
app.get('/api/users/:id/update', async (req, res) => {
    const { username, password, email, mobileNumber} = req.body;
    const result = await userController.updateContact({username, password, email, mobileNumber, state:'updated'});
});

// User - Удалить пользователя по id
// DELETE http://localhost:8888/api/users/{id}/delete
// TODO
app.get('/api/users/:id/delete', async (req, res) => {
    const result = await userController.deleteUser({id : req.params.id});
});

// User - Добавить пользователя
// GET http://localhost:8888/api/users/register
app.get('/api/register', async (req, res, next)=> {
    const newUser =  { username, password, email, mobileNumber} = req.body;
    /*const newUser = {
        password : 'test',
        username : 'test',
        email : 'test@test.com',
        mobileNumber : '111111111',
        };*/
    newUser.status = 'new';
    const result = await userController.createUser(newUser)
        .then(user =>
                res.json({ user, msg: 'account created successfully' })
        );
});

// запуск сервера
app.listen(srv.PORT.value, ()=>{
    console.log(`Server started on ${srv.HOST.value}:${srv.PORT.value}`);
});