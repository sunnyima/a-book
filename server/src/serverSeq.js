"use strict";

// #region Vars
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

const  userController = require('./controllers/userController');

const app = express();

<<<<<<< HEAD
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
=======
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
//#endregion

// #region Country
// Country - Получить список всех стран
// GET http://localhost/api/countries
// GET http://localhost/api/countries?page=5&limit=5
app.get('/api/countries', async (req, res) => {    
    let page = parseInt(req.query.page, 10);
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
    const result = await country.get(page, limit);
>>>>>>> upstream/master
    res.send(result);
});

// Country - Получить детализацию страны по id
// GET http://localhost/api/countries/{id}
app.get('/api/countries/:id', async (req, res) => {
    const id = req.params.id;
    const result = await country.details(id);
    res.send(result);
});

// Country - Добавить страну
// POST http://localhost/api/countries
app.post('/api/countries', async (req, res) => {
    const result = country.add(req.body);
    res.send(result);
});

// Country - Изменить страну
// POST http://localhost/api/countries/{id}
app.post('/api/countries/:id', async (req, res) => {
    const result = await country.update(req.params.id,req.body);
    res.send(result);
});

// Country - Удалить страну по id
// DELETE http://localhost/api/countries/{id}
app.delete('/api/countries/:id', async (req, res) => {
    const result = await country.delete(req.params.id);
    res.send(result);
});

//#endregion Country

// #region City
// City - Получить список городов определенной страны
// GET http://localhost/api/countries/{countryId}/cities
app.get('/api/countries/:countryId/cities', async (req, res) => {
    const countryId = req.params.countryId;
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
    const result = await city.get(page, limit, countryId);
    res.send(result);
});

// City - Получить детализацию города по id
// GET http://localhost/api/cities/{id}
app.get('/api/cities/:id', async (req, res) => {
    const result = await city.details(req.params.id);
    res.send(result);
});

// City - Добавить город
// POST http://localhost/api/cities
app.post('/api/cities', async (req, res) => {
    const result = city.add(req.body);
    res.send(result);
});

// City - Изменить город
// POST http://localhost/api/cities/{id}
app.post('/api/cities/:id', async (req, res) => {
    const result = await city.update(req.params.id,req.body);
    res.send(result);
});

// City - Удалить город по id
// DELETE http://localhost/api/cities/{id}
app.delete('/api/cities/:id', async (req, res) => {
    const result = await city.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Email
// Email - Получить список электронных адресов определенного контакта
// GET http://localhost/api/contacts/{contactId}/emails
// GET http://localhost/api/contacts/{contactId}/emails?page=5&limit=5
app.get('/api/contacts/:contactId/emails', async (req, res) => {
    const contactId = req.params.contactId;
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
    const result = await email.get(page, limit, contactId);
    res.send(result);
});

// Email - Получить детализацию электронного адреса по id
// GET http://localhost/api/emails/{id}
app.get('/api/emails/:id', async (req, res) => {
    const result = await email.details(req.params.id);
    res.send(result);
});

// Email - Добавить электронный адрес
// POST http://localhost/api/emails
app.post('/api/emails', async (req, res) => {
    const result = email.add(req.body);
    res.send(result);
});

// Email - Изменить электронный адрес
// POST http://localhost/api/emails/{id}
app.post('/api/emails/:id', async (req, res) => {
    const result = await email.update(req.params.id,req.body);
    res.send(result);
});

// Email - Удалить электронный адрес по id
// DELETE http://localhost/api/emails/{id}
app.delete('/api/emails/:id', async (req, res) => {
    const result = await email.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Phone
// Phone - Получить список телефонов определенного контакта
// GET http://localhost/api/contacts/{contactId}/phones
// GET http://localhost/api/contacts/{contactId}/phones?page=5&limit=5
app.get('/api/contacts/:contactId/phones', async (req, res) => {
    const contactId = req.params.contactId;
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
    const result = await phone.get(page, limit, contactId);
    res.send(result);
});

// Phone - Получить детализацию телефона по id
// GET http://localhost/api/phones/{id}
app.get('/api/phones/:id', async (req, res) => {
    const result = await phone.details(req.params.id);
    res.send(result);
});

// Phone - Добавить телефон
// POST http://localhost/api/phones
app.post('/api/phones', async (req, res) => {
    const result = phone.add(req.body);
    res.send(result);
});

// Phone - Изменить телефон
// POST http://localhost/api/phones/{id}
app.post('/api/phones/:id', async (req, res) => {
    const result = await phone.update(req.params.id,req.body);
    res.send(result);
});

// Phone - Удалить телефон по id
// DELETE http://localhost/api/phones/{id}
app.delete('/api/phones/:id', async (req, res) => {
    const result = await phone.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Www
// Www - Получить список сайтов определенного контакта
// GET http://localhost/api/contacts/{contactId}/www
// GET http://localhost/api/contacts/{contactId}/www?page=5&limit=5
app.get('/api/contacts/:contactId/www', async (req, res) => {
    const contactId = req.params.contactId;
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
    const result = await www.get(page, limit, contactId);
    res.send(result);
});

// Www - Получить детализацию сайта по id
// GET http://localhost/api/www/{id}
app.get('/api/www/:id', async (req, res) => {
    const result = await www.details(req.params.id);
    res.send(result);
});

// Www - Добавить сайт
// POST http://localhost/api/www
app.post('/api/www', async (req, res) => {
    const result = www.add(req.body);
    res.send(result);
});

// Www - Изменить сайт
// POST http://localhost/api/www/{id}
app.post('/api/www/:id', async (req, res) => {
    const result = await www.update(req.params.id,req.body);
    res.send(result);
});

// Www - Удалить сайт по id
// DELETE http://localhost/api/www/{id}
app.delete('/api/www/:id', async (req, res) => {
    const result = await www.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Im
// Im - Получить список месенджеров определенного контакта
// GET http://localhost/api/contacts/{contactId}/ims
// GET http://localhost/api/contacts/{contactId}/ims?page=5&limit=5
app.get('/api/contacts/:contactId/ims', async (req, res) => {
    const contactId = req.params.contactId;
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
    const result = await im.get(page, limit, contactId);
    res.send(result);
});

// Im - Получить детализацию месенджера по id
// GET http://localhost/api/ims/{id}
app.get('/api/ims/:id', async (req, res) => {
    const result = await im.details(req.params.id);
    res.send(result);
});

// Im - Добавить месенджер
// POST http://localhost/api/ims
app.post('/api/ims', async (req, res) => {
    const result = ims.add(req.body);
    res.send(result);
});

// Im - Изменить месенджер
// POST http://localhost/api/ims/{id}
app.post('/api/ims/:id', async (req, res) => {
    const result = await ims.update(req.params.id,req.body);
    res.send(result);
});

<<<<<<< HEAD
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
    userController.getUser({id: req.params.id}).then(user => res.json(user));
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

=======
// Im - Удалить месенджер по id
// DELETE http://localhost/api/ims/{id}
app.delete('/api/ims/:id', async (req, res) => {
    const result = await ims.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Org
// Org - Получить список организаций определенного контакта
// GET http://localhost/api/contacts/{contactId}/orgs
// GET http://localhost/api/contacts/{contactId}/orgs?page=5&limit=5
app.get('/api/contacts/:contactId/orgs', async (req, res) => {
    const contactId = req.params.contactId;
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
    const result = await org.get(page, limit, contactId);
    res.send(result);
});

// Org - Получить детализацию организации по id
// GET http://localhost/api/orgs/{id}
app.get('/api/orgs/:id', async (req, res) => {
    const result = await org.details(req.params.id);
    res.send(result);
});

// Org - Добавить организацию
// POST http://localhost/api/orgs
app.post('/api/orgs', async (req, res) => {
    const result = org.add(req.body);
    res.send(result);
});

// Org - Изменить организацию
// POST http://localhost/api/orgs/{id}
app.post('/api/orgs/:id', async (req, res) => {
    const result = await org.update(req.params.id,req.body);
    res.send(result);
});

// Org - Удалить организацию по id
// DELETE http://localhost/api/orgs/{id}
app.delete('/api/orgs/:id', async (req, res) => {
    const result = await org.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Person
// Person - Получить персону определенного контакта
// GET http://localhost/api/contacts/{contactId}/person
app.get('/api/contacts/:contactId/person', async (req, res) => {
    const result = await person.get(req.params.contactId);
    res.send(result);
});

// Person - Получить детализацию персоны по id
// GET http://localhost/api/person/{id}
app.get('/api/person/:id', async (req, res) => {
    const result = await person.details(req.params.id);
    res.send(result);
});

// Person - Добавить персону
// POST http://localhost/api/person
app.post('/api/person', async (req, res) => {
    const result = person.add(req.body);
    res.send(result);
});

// Person - Изменить изменить
// POST http://localhost/api/person/{id}
app.post('/api/orgs/:id', async (req, res) => {
    const result = await person.update(req.params.id,req.body);
    res.send(result);
});

// Person - Удалить персону по id
// DELETE http://localhost/api/person/{id}
app.delete('/api/person/:id', async (req, res) => {
    const result = await person.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region Contact
// Contact - Получить список контактов определенного пользователя
// GET http://localhost/api/users/{userId}/contacts
// GET http://localhost/api/users/{userId}/contacts?page=5&limit=5
app.get('/api/users/{userId}/contacts', async (req, res) => {
    const userId = req.params.id;
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
    const result = await contact.get(page, limit, userId);
    res.send(result);
});

// Contact - Получить детализацию контакта по id
// GET http://localhost/api/contacts/{id}
app.get('/api/contacts/:id', async (req, res) => {
    const result = await contact.details(req.params.id);
    res.send(result);
});

// Contact - Добавить контакт
// POST http://localhost/api/contacts
app.post('/api/contacts', async (req, res) => {
    const result = contact.add(req.body);
    res.send(result);
});

// Contact - Изменить контакт
// POST http://localhost/api/contacts/{id}
app.post('/api/contacts/:id', async (req, res) => {
    const result = await contact.update(req.params.id,req.body);
    res.send(result);
});

// Contact - Удалить контакт по id
// DELETE http://localhost/api/emails/{id}
app.delete('/api/contacts/:id', async (req, res) => {
    const result = await contact.delete(req.params.id);
    res.send(result);
});
//#endregion

// #region User
// User - Получить список пользователей
// GET http://localhost/api/users
// GET http://localhost/api/users/?page=5&limit=5
app.get('/api/users', async (req, res) => {
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
    const result = await user.get(page, limit);
    res.send(result);
});

// User - Получить детализацию пользователя по id
// GET http://localhost/api/users/{id}
app.get('/api/users/:id', async (req, res) => {
    const result = await user.details(req.params.id);
    res.send(result);
});

// User - Добавить пользователя
// POST http://localhost/api/users
app.post('/api/users', async (req, res) => {
    const result = user.add(req.body);
    res.send(result);
});

// User - Изменить пользователя
// POST http://localhost/api/users/{id}
app.post('/api/users/:id', async (req, res) => {
    const result = await user.update(req.params.id,req.body);
    res.send(result);
});

// User - Удалить пользователя по id
// DELETE http://localhost/api/users/{id}
app.delete('/api/users/:id', async (req, res) => {
    const result = await user.delete(req.params.id);
    res.send(result);
});
//#endregion

app.listen(srv.PORT.value, ()=>{
    console.log(`Server started on ${srv.HOST.value}:${srv.PORT.value}`);    
});
>>>>>>> upstream/master
