// Genres, Director, starring
import React from 'React';

const OtherInfo = (props) => {
  return (
    <div>
      <h3>Genres</h3><h4>{props.genres}</h4>
      <h3>Director</h3><h4>{props.director}</h4>
      <h3>Starring</h3><h4>{props.starring}</h4>
    </div>
  );
};

export default OtherInfo;