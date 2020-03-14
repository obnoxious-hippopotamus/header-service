// stars, vote count, imdb, duration, year, PG Rating, subtitle icon
import React from 'react';
import { Rating } from '@material-ui/lab';

const RatingBar = (props) => {

  return (
    <div className="ratings flexRow">
      <span>
        <Rating name="read-only" value={props.stars || 0} precision={0.01} readOnly />
      </span>
      <span className="marginLeft"><p id="vote">({props.votes})</p></span>
      <span className="marginLeft"><img className="imdb" src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png" /></span>
      <span className="marginLeft"><p>{props.imdb}</p></span>
      <span className="marginLeft"><p>{props.duration} min</p></span>
    </div>
  );
};

export default RatingBar;