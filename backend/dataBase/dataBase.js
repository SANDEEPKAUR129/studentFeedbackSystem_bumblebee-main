const mysql = require('mysql2');
require('dotenv').config();
 
 
const db = mysql.createPool({
    connectionLimit: 10,
    host : process.env.HOST,
    user : process.env.USER,
    database : process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections`
    idleTimeout: 60020, // idle connections timeout,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
   
})
db.getConnection((error) =>{
    if(error) throw error;
    console.log('Database connected successfully')
})
 
module.exports = db;