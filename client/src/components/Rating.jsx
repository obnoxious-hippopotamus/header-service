// stars, vote count, imdb, duration, year, PG Rating, subtitle icon
import React from 'react';

const Rating = (props) => {
  return (
    <div>
      <h3>Stars {props.stars}</h3>
      <h3> IMDb Rating {props.imdb}</h3>
      <h3>Duration {props.duration} min</h3>
    </div>
  );
};

export default Rating;