const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'root',
  database: 'movies_db'
};

const connection = mysql.createConnection(config);

const getMovie = function(id, callback) {
  // console.log('getting DB');
  let queryString = `SELECT * FROM movies WHERE title = '${id}'`;
  connection.query(queryString, (err, results, fields) => {
    if (err) {
      console.log('======== ERROR ', err);
    } else {
      // console.log('======== DB RES', results);
      callback(results);
    }
  });
};

const getTitles = function(callback) {
  let queryString = 'SELECT title, movie_id FROM movies';
  connection.query(queryString, (err, results, fields) => {
    if (err) {
      console.log('&&&&&& ERROR: ', err);
    } else {
      callback(results);
    }
  });
};

module.exports = {
  connection,
  getMovie,
  getTitles
};
