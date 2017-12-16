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

  // delete many
  db.collection(collection).deleteMany({text : 'Some text to write to db'}).then( (result) => {
    console.log(`delete all records ${results}`);
  });

  db.collection(collection).deleteOne({text : 'Some'}).then( (result) => {
    console.log(result);
  });

  db.collection(collection).findOneAndDelete({text : 'Some'}).then( (result) => {
    console.log(result);
  });

  // delete one

  // find and delete


  //client.close();

});
