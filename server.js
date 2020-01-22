var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


//create api
app.get('/', (req,res)=>{
  res.send('Hello World AGAIN');
})

//Launch listening server on port 8080
app.listen(port, function () {
  console.log('RESTful API server started on: ' + port);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/appRoutes.js'); //importing route
routes(app); //register the route