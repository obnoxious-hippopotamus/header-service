// stars, vote count, imdb, duration, year, PG Rating, subtitle icon
import React from 'react';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const RatingBar = (props) => {
  return (
    <div className="ratings flexRow">
      <Rating name="read-only"
        value={props.stars || 0}
        precision={0.01}
        emptyIcon={<StarBorderIcon />}
        readOnly
      />
      <span className="marginLeft"><p id="vote">({props.votes})</p></span>
      <span className="marginLeft"><img className="imdb" src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png" /></span>
      <span className="marginLeft"><h2>{props.imdb}</h2></span>
      <span className="marginLeft"><p>{props.duration} min</p></span>
    </div>
  );
};

export default RatingBar;