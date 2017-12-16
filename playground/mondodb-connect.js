const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to db');
  }


  console.log('Succeed to connect to DB.');
  var db = client.db('TodoApp');


var user = {name: 'Shalom', last: 'yaish'};
var {name} = user;

console.log(name);

// db.collection('Todos').insertOne({
//   text: 'Some text to write to db',
//   completed: false
// }, (err, results) => {
//   if (err) {
//     console.log('Unable to insert Todo', err);
//   }
//   console.log(JSON.stringify(results.ops, undefined, 2));
// });
//
// db.collection('Users').insertOne({
//   name: 'ShalomYa',
//   age: '39',
//   location: 'Tel Aviv'
// }, (err, results) => {
//   if(err) {
//     return console.log('Unable to write user document', err);
//   }
//   console.log(results.ops);
// });


  client.close();

 });
