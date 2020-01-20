var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


//create api
app.get('/', (req,res)=>{
  res.send('Hello World');
})

//Launch listening server on port 8080
app.listen(port, function () {
  console.log('todo list RESTful API server started on: ' + port);
})