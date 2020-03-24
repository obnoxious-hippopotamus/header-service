const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/header/movie', (req, res, next) => {
  console.log('Getting a movie', req.query.id);
  db.getMovie(req.query.id, (results) => {
    res.status(200).send(results);
  });
});


app.get('/api/header/titles', (req, res, next) => {
  db.getTitles( (results) => {
    res.status(200).send(results);
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
