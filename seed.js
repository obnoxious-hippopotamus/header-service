const Axios = require('axios');
const { connection } = require('./db/index.js');
const { API_KEY } = require('./db/config.js');

const getMoviesAndPopulateDB = async function () {
  let movieIds = [];
  let moviesInfo = [];

  let page = 1;

  while (page <= 5) {

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
//   console.log(movieIds);
//   await console.log('5 pages done, beginning API reqs for each movie', );
  await movieIds.forEach(movie => {
    // console.log('new movie API req');
    let movieString = `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&language=en-US`;
    Axios.get(movieString)
      .then(results => {
          let path = results.data;
          let options = {
              movie_id: path.id,
              title: path.title,
              rating: path.vote_average,
              poster_path: path.poster_path
          }
          let queryString = `INSERT INTO movies (movie_id) VALUES ('${path.id}')`;
          connection.query(queryString, (err, results, fields) => {
            if (err) {
              callback(err);
            } else {
              console.log(results);
            }
          });
        })
      .catch(err => console.log(err));
    });
  await console.log('trying to get movies info: ', moviesInfo);
};

getMoviesAndPopulateDB();