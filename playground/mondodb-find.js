//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const scheme = 'TodoApp';
const collection = 'Todos';
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to db');
  }


  console.log('Succeed to connect to DB.');
  var db = client.db(scheme);


  // var user = {name: 'Shalom', last: 'yaish'};
  // var {name} = user;
  //
  //console.log(name);

  // db.collection(collection).find({
  //   _id : new ObjectID('5a33dee50e73072781cd028c')
  // }).toArray().then( (docs) => {
  //   console.log(collection);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // } )

  db.collection('Users').find({name : 'Shalom'}).toArray().then( (docs) => {
    console.log(`fetch suceess ${collection} docs of ${JSON.stringify(docs)}`);

  }, (err) => {
    console.log('Unable to fetch Todos', err);
  } )

  db.collection(collection).find().count().then( (count) => {
    console.log(`fetch suceess ${collection} count of ${count}`);

  }, (err) => {
    console.log('Unable to fetch Todos', err);
  } )

  //client.close();

});
