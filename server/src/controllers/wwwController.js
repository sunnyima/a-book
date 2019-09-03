const pool = require('../configs/configDB');
const table = `www`;

class Www  {
    constructor(){
        this.id = 0,
        this.userId = 0,
        this.address = ''        
    }

    get(page = 1, limit = 1, userId){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);                
                const offset = (page-1)*limit;
                const sqlAll = `select * from  ${table} where userId = ?;`;
                const sqlPage = `select * from ${table} limit ?,? where userId = ?;`;                
                if (limit = 0) {
                    const data = [userId];
                    connection.query(sqlAll, data,(err, result) => {
                        if (err) return reject(err);
                        connection.release();
                        resolve(result);
                    });
                } else {
                    const data = [offset, limit, userId];
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

    add(www){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                sql = `insert into ${table} set ?;`;
                data = [www];
                connection.query(sql, data, (err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    update(id,www){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `update ${table} set ? where id = ?;`;
                const data = [www,id];
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

module.exports = Www;