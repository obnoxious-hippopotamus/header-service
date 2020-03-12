const Axios = require('axios');
const connection = require('./db/index.js');
const { API_KEY } = require('./db/config.js');

async function getMoviesAndPopulateDB() {
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

  movieIds.forEach(movie => {
    let movieString = `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&language=en-US`;
    //   console.log(movieString);
    await Axios.get(movieString)
      .then(movieResults => console.log(movieResults))
      .catch(err => console.log(err));
  });

};

getMoviesAndPopulateDB();