const mysql = require('mysql');

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_ROOT_PASSWORD
};

const connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});


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
