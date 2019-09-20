const Country = require('../models/country');
const City = require('../models/city');
//City.belongsTo(Country, {foreignKey: 'countryId'});

//City.belongsTo(Country, {foreignKey: 'channel_fk', as: 'country'});

/**
 * создат город
 * @param name
 * @returns {Promise<*>}
 */
const createCity = async ({ countryId, city }) => {
    return await City.create({ countryId, city });
};

/**
 * все горда (не знаю надо ли)
 * @returns {Promise<*>}
 */
const getAllCities = async () => {
    return await City.findAll();
};

/**
 * все города страны
 * @param obj
 * @returns {Promise<*>}
 */
const getAllCountryCities = async obj => {
    return await City.findAll({
        where: obj,
    });
};

/**
 * данные одного города
 * @param obj
 * @returns {Promise<*>}
 */
const getCity = async obj => {
    return await City.findOne({
        where: obj,
    });
};

/**
 * удаление одного города
 * @param obj
 * @returns {Promise<*>}
 */
const deleteCity = async obj => {
    return await City.delete({
        where: obj,
    });
};

/**
 * обновление одного города
 * @param obj
 * @returns {Promise<*>}
 */
const updateCity = async (where, obj) => {
    return await City.update({
        where: where,
        obj,
    });
};
module.exports = {
                    createCity,
                    getAllCities,
                    getAllCountryCities,
                    getCity,
                    deleteCity,
                    updateCity,
                };