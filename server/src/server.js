"use strict";

const express = require('express');
const countryController = require('./controllers/countryController');
const cityController = require('./controllers/cityController');
const srv = require('./configs/configSRV');

const  userController = require('./controllers/userController');

const app = express();

const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.json({ message: 'Express is up!' });
});

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

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// parse application/json
app.use(bodyParser.json());//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// get all users
app.get('/api/users', function(req, res) {
    userController.getAllUsers().then(user => res.json(user));
});

// get all users
app.get('/api/users/:id', function(req, res) {
    userController.getUser(req.params.id).then(user => res.json(user));
});

// register route
app.post('/api/register', function(req, res, next) {
const { name, password } = req.body;
    userController.createUser({ name, password }).then(user =>
        res.json({ user, msg: 'account created successfully' })
    );
});

/**
 * TODO заменила функцию, не поняла как слушался порт в старом варианте
 * app.listen(srv.PORT, ()=>{
        console.log(`Server started on ${srv.HOST}:${srv.PORT}`);
    });
*/
app.listen(srv.PORT.value, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${srv.HOST.value}:${srv.PORT.value}`)
});

