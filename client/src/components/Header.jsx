import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Rating from './Rating.jsx';
import Poster from './Poster.jsx';
import OtherInfo from './OtherInfo.jsx';
import Description from './Description.jsx';

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

  render() {

    return (
      <div>
        <Title title={this.state.movieInfo.title} />
        <Rating
          stars={this.state.movieInfo.rating}
          votes={this.state.movieInfo.vote_count}
          imdb={this.state.movieInfo.imdb_Rating}
          duration={this.state.movieInfo.duration}
          released={this.state.movieInfo.release_date}
        />
        <Poster
          poster={this.state.movieInfo.poster_path}
        />
        <Description
          description={this.state.movieInfo.description}
        />
        <OtherInfo
          genres={this.state.movieInfo.genres}
          director={this.state.movieInfo.director}
          starring={this.state.movieInfo.starring}
        />
      </div>
    );
  }
}

export default Header;