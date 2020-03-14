import React from 'react';

const Poster = (props) => {
  return (
    <div>
      <img className="poster" src={'https://image.tmdb.org/t/p/w500/' + props.poster} />
    </div>
  );
};

export default Poster;