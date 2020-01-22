'use strict';

var mysql = require('mysql');

const DATABASE_URI = process.env.DATABASE_URI || 'localhost';
const DATABASE_NAME = process.env.DATABASE_NAME || 'mydb';
const DATABASE_USER = process.env.DATABASE_USER || 'root';
const DATABASE_PASS = process.env.DATABASE_PASS || 'WST6wPB9Tweehnne';

//local mysql db connection
var connection = mysql.createConnection({
    host     : DATABASE_URI,
    user     : DATABASE_USER,
    password : DATABASE_PASS,
    database : DATABASE_NAME
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;