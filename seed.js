const Axios = require('axios');
const connection = require('./db/index.js');

const getMoviesAndPopulateDB = function() {
    let movieIds = [];
    let moviesInfo = [];

    Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}')
}

getMoviesAndPopulateDB();