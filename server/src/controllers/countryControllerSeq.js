const Country = require('../models/country');
const City = require('../models/city');

Country.hasMany(City, {foreignKey: 'countryId', as: 'cities'});

/**
 * Создание новой страны
 * @param country
 * @returns {Promise<*>}
 */
const createCountry = async ({ country}) => {
    return await Country.create({ country });
};

/**
 * списк всех стран с городами
 * @returns {Promise<void>}
 */
const getAllCountriesWithCities = async () => {
    //Country.hasMany(City, {foreignKey: 'channel_fk', as: 'cities'});
    return await Country.findAll({
        include: [{model: City, as: 'cities'}]
    });
};

/**
 * список стран
 * @returns {Promise<void>}
 */
const getAllCountries= async () => {
    return await Country.findAll();
};

/**
 * одна страна с городами
 * @param obj
 * @returns {Promise<void>}
 */
const getCountryWithCities = async obj => {
    return await Country.findOne({
        where: obj,
        include: [{model: City, as: 'cities'}]
    });
};

/**
 * одна страна
 * @param obj
 * @returns {Promise<void>}
 */
const getCountry = async obj => {
    return await Country.findOne({
        where: obj,
    });
};

/**
 * удалить страну
 * @param obj
 * @returns {Promise<void>}
 */
const deleteCountry = async obj => {
    return await Country.delete({
        where: obj,
    });
};

/**
 * редактировать страну
 * @param obj
 * @returns {Promise<void>}
 */
const updateCountry = async (where, obj) => {
    return await Country.update({
        where: where,
        obj,
    });
};


module.exports = {
                    createCountry,
                    getAllCountries,
                    getAllCountriesWithCities,
                    getCountry,
                    getCountryWithCities,
                    updateCountry,
                    deleteCountry,
                };