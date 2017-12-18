var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  console.log(req.body);

  var todo = new Todo ({
    text: req.body.text
  });
  todo.save().then( (doc) => {
    console.log('succeed to save todos');
    res.send(doc);
  }, (err) => {
    console.log('Failed to save todos');
  });

});

app.listen(3000, ()=> {
  console.log("Started qith port 3000");
});
