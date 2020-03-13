const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'root',
  database: 'movies_db'
};

const connection = mysql.createConnection(config);

const getMovie = function(id, callback) {
  // console.log('getting DB');
  let queryString = `SELECT * FROM movies WHERE movie_id = ${id}`;
  connection.query(queryString, (err, results, fields) => {
    if (err) {
      console.log('======== ERROR ', err);
    } else {
      // console.log('======== DB RES', results);
      callback(results);
    }
  });
};

// const getAllCategories = function(callback) {
//   let queryString = 'SELECT * FROM categories';
//   connection.query(queryString, (err, results, fields) => {
//     if (err) {
//       callback(err);
//     } else {
//       // console.log('======== DB RES', results);
//       callback(results);
//     }
//   });
// };

// const AddCategory = function(budget) {
//   // console.log('Adding category to DB', budget.name, budget.amount);
//   let queryString = `INSERT INTO categories (name, amount) VALUES ("${budget.name}", "${budget.amount}")`;
//   connection.query(queryString, (err, results, fields) => {
//     if (err) {
//       callback(err);
//     } else {
//       console.log(results);
//     }
//   });
// };

module.exports = {
  connection,
  getMovie
};
