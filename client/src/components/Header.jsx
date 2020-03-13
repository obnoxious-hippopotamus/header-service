import React from 'react';
import axios from 'axios';

import Title from './Title.jsx';
import Rating from './Rating.jsx';
import Poster from './Poster.jsx';
import OtherInfo from './OtherInfo.jsx';
import Description from './Description.jsx';
import Buttons from './Buttons.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieIndex: 284053,
      movieInfo: {}
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    // console.log('mounted');
    this.getMovie(this.state.movieIndex);
  }

  getMovie(movieId) {

    let options = {
      params: {
        id: movieId
      }
    };

    axios.get('/api/movie', options)
      .then(results => {
        // console.log('RESULTS on Client: ', results.data[0]);
        this.setState({
          movieInfo: results.data[0]
        }, () => console.log(this.state));
      })
      .catch(err => console.log('ERROR', err));
  }
  // {/* <Poster
  //   poster={this.state.movieInfo.poster_path}
  // /> */}

  render() {
    console.log(this.state.movieInfo.rating);
    return (
      <div>
        <div className="container" >
          <img className="poster" src={'https://image.tmdb.org/t/p/w500/' + this.state.movieInfo.poster_path} />
          <Title title={this.state.movieInfo.title} />
          <Rating
            stars={this.state.movieInfo.rating}
            votes={this.state.movieInfo.vote_count}
            imdb={this.state.movieInfo.imdb_Rating}
            duration={this.state.movieInfo.duration}
            released={this.state.movieInfo.release_date}
          />
          <Description
            description={this.state.movieInfo.description}
          />
          <h2 className="logo">prime</h2><h4>Included with Prime</h4>
          <div>
            <Buttons />
          </div>
        </div>
        <div>
          <OtherInfo
            genres={this.state.movieInfo.genres}
            director={this.state.movieInfo.director}
            starring={this.state.movieInfo.starring}
          />
          <p className="subtext">By ordering or viewing, you agree to our Terms. Sold by Amazon Digital Services LLC.</p>
        </div>
      </div>
    );
  }
}

export default Header;