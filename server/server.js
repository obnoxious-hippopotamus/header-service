const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/api/transactions', (req, res, next) => {
//   console.log('Getting all transactions');
//   db.getAllTransactions( (results) => {
//     res.status(200).send(results);
//   });
// });

// app.get('/api/categories', (req, res, next) => {
//   console.log('Getting all categories');
//   db.getAllCategories( (results) => {
//     res.status(200).send(results);
//   });
// });

// app.post('/api/categories', (req, res, next) => {
//   db.AddCategory(req.body);
//   res.status(200).send(console.log('Budget Added'));
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// UNCOMMENT FOR BACKBONE
// app.use(express.static(__dirname + '/../backbone-client'));
// app.use(express.static(__dirname + '/../node_modules'));