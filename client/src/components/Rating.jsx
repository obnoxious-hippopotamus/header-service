// stars, vote count, imdb, duration, year, PG Rating, subtitle icon
import React from 'react';
import { Rating } from '@material-ui/lab';

const RatingBar = (props) => {

  return (
    <div className="ratings">
      <div>
        <Rating name="read-only" value={props.stars || 0} precision={0.1} readOnly />
      </div>
      <span className="marginLeft"><p>IMDb {props.imdb}</p></span>
      <span className="marginLeft"><p>{props.duration} min</p></span>
    </div>
  );
};

export default RatingBar;