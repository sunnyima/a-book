const pool = require('../configs/configDB');
const table = `users`;

class User  {
    constructor(){
        this.id = 0,
        this.login = '',
        this.password = '',
        this.personId = '',
        this.emailId = '',
        this.orgId = ''                
    }

    get(page = 1, limit = 1){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);                
                const offset = (page-1)*limit;
                const sqlAll = `select * from  ${table};`;
                const sqlPage = `select * from ${table} limit ?,?;`;                
                if (limit = 0) {
                    connection.query(sqlAll, data,(err, result) => {
                        if (err) return reject(err);
                        connection.release();
                        resolve(result);
                    });
                } else {
                    const data = [offset, limit];
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

    add(user){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                sql = `insert into ${table} set ?;`;
                data = [user];
                connection.query(sql, data, (err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    update(id,user){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `update ${table} set ? where id = ?;`;
                const data = [user,id];
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

module.exports = User;