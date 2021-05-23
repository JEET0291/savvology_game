const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// CONNECTION TO MONGODB //
const initDb = require("./db").initDb;
const getDb = require("./db").getDb;
var db;

initDb(()=>{
  console.log("CONNECTION INITIALIZED");
  db = getDb();
});

// var MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb://localhost:27017/savvologyBank', function (err, client) {
//   if (err) throw err
//   var db = client.db('savvologyBank');
//   db.collection('banks').find().toArray(function (err, result) {
//     if (err) throw err
//   })
// })

// place holder for the data


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users/:searchKey', (req, res) => {
  db.collection('banks').find({ $or: [ 
    // { ifsc: { "$regex": req.params.searchKey, "$options": "-i" } },
    // { bank_name: { "$regex": req.params.searchKey, "$options": "-i" } },
    { ifsc: req.params.searchKey },
    { bank_name: req.params.searchKey },
  ] }).toArray(function (err, result) {
    if (err) throw err
    res.json(result);
  })
});

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
// });

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});