//! PARA LOCAL DB postgres

// contendra conexion a bd
const {Pool} = require('pg');
const {db} = require('./config');

const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
})

module.exports = pool

//* e.g. tabla a crear
// create table task(
// 	id serial primary key,
// 	title varchar(255) unique,
// 	description varchar(255)
// )
