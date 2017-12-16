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

  // db.collection(collection).findOneAndUpdate({
  //   _id : new ObjectID ('5a33dee50e73072781cd0225')
  // }, {
  //   $set : {
  //     name : 'Shalom',
  //     lastNAme : 'Yaish',
  //     age : 5
  //   }
  // }, {
  //   returnOriginal : false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection(collection).findOneAndUpdate({
    _id : new ObjectID ('5a33dee50e73072781cd0225')
  }, {
    $set : {
      name : 'Shalom',

    },
    $inc : {
      age : 1
    }
  }, {
    returnOriginal : false
  }).then( (result) => {
    console.log(result);
  });

  //client.close();

});
