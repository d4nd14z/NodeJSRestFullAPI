require("dotenv").config()      //Leer variables de configuracion de MySQL desde el archivo de variables de entorno .env
const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DBASE
});

mysqlConnection.connect( function(err){
    if(err){
        console.log(process.env.DB_CONNECTION_STATUS_ERR);
        console.error(err);
    }
    else{
        console.log(process.env.DB_CONNECTION_STATUS_OK);
    }
});

module.exports = mysqlConnection;