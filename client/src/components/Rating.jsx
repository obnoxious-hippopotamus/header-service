// stars, vote count, imdb, duration, year, PG Rating, subtitle icon
import React from 'react';

const Rating = (props) => {
  return (
    <div>
      <span>Stars {props.stars}</span>
      <span> IMDb Rating {props.imdb}</span>
      <span>{props.duration} min</span>
    </div>
  );
};

export default Rating;