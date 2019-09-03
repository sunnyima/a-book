"use strict";

const express = require('express');
const City = require('./controllers/cityController');
const Contact = require('./controllers/contactController');
const Country =  require ('./controllers/countryController');
const Email =  require ('./controllers/emailController');
const Im =  require ('./controllers/imController');
const Org =  require ('./controllers/orgController');
const Person =  require ('./controllers/personController');
const Phone =  require ('./controllers/phoneController');
const User =  require ('./controllers/userController');
const Www =  require ('./controllers/wwwController');


const srv = require('./configs/configSRV');

const app = express();

const city = new City();
const contact = new Contact();
const country = new Country();
const email = new Email();
const im = new Im();
const org = new Org();
const person = new Person();
const phone = new Phone();
const user = new User();
const www = new Www();

const itemALL = 0;
const itemDefaultPerPage = 10;
const itemMAXPerPage = 50;


// Получить список всех стран
// GET http://localhost/api/countries
// GET http://localhost/api/countries?page=5&limit=5
app.get('/api/countries', async (req, res) => {    
    let page = parseInt(req.query.page, 10);
  /*   if (isNaN(page) || page < 1) {
        page = 1;
    } */
    (isNaN(page) || page < 1)? (page = 1):(page = page);
    let limit = parseInt(req.query.limit, 10);
    /* if (isNaN(limit)) {
        limit = itemDefaultPerPage;
    } else if (limit > itemMAXPerPage) {
        limit = itemMAXPerPage;
    } else if (limit < 1) {
        limit = itemALL; 
    } */
    (isNaN(limit)) ? 
        (limit = itemDefaultPerPage):    
        (
            (limit > itemMAXPerPage) ? 
                (limit = itemMAXPerPage) : 
                (
                    (limit < 1) ? 
                        (limit = itemALL) : 
                        (limit = limit)
                )
        );
    console.log(limit);    
    const result = await country.get(page, limit);
    res.send(result);
});

// Получить детализацию страны по id
// GET http://localhost/api/countries/:{id}
app.get('/api/countries/:id', async (req, res) => {
    const id = req.params.id;
    const result = await country.details(id);
    res.send(result);
});

// Добавить страну
app.post('/api/countries', async (req, res) => {
    const result = country.add(req.body);
    res.send(result);
});

// Изменить страну
app.post('/api/countries/:id', async (req, res) => {
    const result = await country.update(req.params.id,req.body);
    res.send(result);
});

// Удалить страну по id
app.delete('/api/countries/:id', async (req, res) => {
    const result = await country.delete(req.params.id);
    res.send(result);
});

// Получить список городов определенной страны
app.get('/api/countries/:countryId/cities', async (req, res) => {
    const page = parseInt(req.query.page, 10);
    if (isNaN(page) || page < 1) {
        page = 1;
    }
    const limit = parseInt(req.query.limit, 10);
    if (isNaN(limit)) {
        limit = itemDefaultPerPage;
    } else if (limit > itemMAXPerPage) {
        limit = itemMAXPerPage;
    } else if (limit < 1) {
        limit = itemALL; 
    }
    const result = await cityController.get(page,limit,req.params.countryId);
    res.send(result);
});

// Получить детализацию города по id
app.get('/api/cities/:id', async (req, res) => {
    const result = await cityController.details(req.params.id);
    res.send(result);
});

// Добавить город
app.post('/api/cities', async (req, res) => {
    const result = cityController.add(req.body);
    res.send(result);
});

// Изменить город
app.post('/api/cities/:id', async (req, res) => {
    const result = await cityController.update(req.params.id,req.body);
    res.send(result);
});

// Удалить город по id
app.delete('/api/cities/:id', async (req, res) => {
    const result = await countryController.delete(req.params.id);
    res.send(result);
});


app.listen(srv.PORT.value, ()=>{
    console.log(`Server started on ${srv.HOST.value}:${srv.PORT.value}`);    
});