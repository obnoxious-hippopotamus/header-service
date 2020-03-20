import React from 'react';
import axios from 'axios';

import Title from './Title.jsx';
import Rating from './Rating.jsx';
import Poster from './Poster.jsx';
import OtherInfo from './OtherInfo.jsx';
import Description from './Description.jsx';
import Buttons from './Buttons.jsx';
import DropList from './DropList.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieIndex: 284053,
      movieName: 'Thor: Ragnarok',
      movieInfo: {},
      movieTitles: []
    };

    this.getMovie = this.getMovie.bind(this);
    this.getTitles = this.getTitles.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.getMovie(this.state.movieName);
  }

  getMovie(movieName) {
    let options = {
      params: {
        id: movieName
      }
    };
    axios.get('/api/movie', options)
      .then(results => {
        this.setState({
          movieInfo: results.data[0]
        }, () => this.getTitles());
      })
      .catch(err => console.log('ERROR', err));
  }

  getTitles() {
    axios.get('/api/titles')
      .then(results => {
        this.setState({
          movieTitles: results.data
        });
      })
      .catch(err => console.log('ERROR', err));
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.getMovie(event.target.value);
  }

  render() {
    return (
      <div className="top">
        <div className="container droplist" >
          <h2>Select Another Movie</h2>
          <DropList onChange={this.handleSelect} titles={this.state.movieTitles} />
        </div>
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
          <h1 className="logo">prime</h1>
          <div className="inline">
            <Buttons />
          </div>
        </div>
        <OtherInfo
          genres={this.state.movieInfo.genres}
          director={this.state.movieInfo.director}
          starring={this.state.movieInfo.starring}
        />
        <p className="subtext">By ordering or viewing, you agree to our Terms. Sold by Amazon Digital Services LLC.</p>
      </div>
    );
  }
}

export default Header;