"use strict";

const express = require('express');
const countryController = require('./controllers/countryController');
const cityController = require('./controllers/cityController');
const srv = require('./configs/configSRV');

const session = require('express-session');

const app = express();

// Получить список стран
app.get('/api/countries', async (req, res) => {
    const result = await countryController.get();
    res.send(result);
});

// Получить детализацию страны по id
app.get('/api/countries/:id', async (req, res) => {
    const result = await countryController.details(req.params.id);
    res.send(result);
});

// Добавить страну
app.post('/api/countries', async (req, res) => {
    const result = countryController.add(req.body);
    res.send(result);
});

// Изменить страну
app.post('/api/countries/:id', async (req, res) => {
    const result = await countryController.update(req.params.id,req.body);
    res.send(result);
});

// Удалить страну по id
app.delete('/api/countries/:id', async (req, res) => {
    const result = await countryController.delete(req.params.id);
    res.send(result);
});

// Получить список городов определенной страны
app.get('/api/countries/:countryId/cities', async (req, res) => {
    const result = await cityController.get(req.params.countryId);
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


app.listen(srv.PORT, ()=>{
    console.log(`Server started on ${srv.HOST}:${srv.PORT}`);
});

app.use( session({
    secret : 'weeHYYUJnhbVDC',
    resave : true,
    saveUninitialized : false,
}));