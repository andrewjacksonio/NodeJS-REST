'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// Launch listening server on port 3000
app.listen(port, function () {
  console.log('RESTful API server started on: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/appRoutes.js'); // importing route
routes(app); // register the route
