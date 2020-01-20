var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

//create api
app.get('/', (req,res)=>{
    res.send('Hello World');
})

console.log('todo list RESTful API server started on: ' + port);