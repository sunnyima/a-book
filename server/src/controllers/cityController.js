const pool = require('../configs/configDB');
const table = `cities`;

class City  {
    constructor(){
        this.id = 0,
        this.countryId = 0,
        this.name =''
    }

    get(page = 1, limit = 1, countryId){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);                
                const offset = (page-1)*limit;
                const sqlAll = `select * from  ${table} where countryId = ?;`;
                const sqlPage = `select * from ${table} limit ?,? where countryId = ?;`;                
                if (limit = 0) {
                    const data = [countryId];
                    connection.query(sqlAll, data,(err, result) => {
                        if (err) return reject(err);
                        connection.release();
                        resolve(result);
                    });
                } else {
                    const data = [offset, limit, countryId];
                    connection.query(sqlPage, data, (err, result) => {
                        if (err) return reject(err);
                        connection.release();
                        resolve(result);
                    });
                }
            })
        })
    };

    details(id){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `select * from ${table} where id = ?;`;
                const data = [id];
                connection.query(sql,data,(err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    add(city){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                sql = `insert into ${table} set ?;`;
                data = [city];
                connection.query(sql, data, (err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    update(id,city){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `update ${table} set ? where id = ?;`;
                const data = [city,id];
                connection.query(sql, data,(err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    delete(id){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `delete from ${table} where id = ?;`;
                const data = [id];
                connection.query(sql,data, (err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };
};

module.exports = City;