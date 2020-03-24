const Axios = require('axios');
const { connection } = require('./db/index.js');
const { API_KEY } = require('./db/config.js');
const faker = require('faker');

const getMoviesAndPopulateDB = async function () {
  let movieIds = [];

  let page = 1;

  while (page <= 6) {

    let discoverString = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`;

    await Axios.get(discoverString)
      .then(results => {
        let movies = results.data.results;
        movies.forEach(movie => {
          movieIds.push(movie.id);
        });
      })
      .catch(err => console.log(err));
      page++;
  };

  await movieIds.forEach(movie => {
    let movieString = `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&language=en-US`;
    Axios.get(movieString)
      .then(results => {
          let path = results.data;

          let description = path.overview;
          let queryString = `INSERT INTO movies (movie_id, title, rating, vote_count, poster_path, imdb_Rating, duration, release_date, description, genres, director, starring) VALUES ("${path.id}", "${path.title}", "${path.vote_average / 2}", "${path.vote_count}", "${path.poster_path}", "${path.vote_average}", "${path.runtime || '0'}", "${path.release_date}", "${description || 'N/A'}", "${path.genres[0].name || 'N/A'}", "${faker.name.findName()}", "${faker.name.findName()}")`;

          connection.query(queryString, (err, results, fields) => {
            if (err) {
              console.log('++++++++ ERROR ++++++++', err);
            }
          });
        })
      .catch(err => console.log(err));
    });
};

getMoviesAndPopulateDB();