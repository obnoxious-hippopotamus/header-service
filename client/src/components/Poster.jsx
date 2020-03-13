import React from 'react';

const Poster = (props) => {
  return (
    <div>
      <span>
        <img src= {'https://image.tmdb.org/t/p/w500/' + props.poster} />
      </span>
    </div>
  );
};

export default Poster;