// Genres, Director, starring
import React from 'React';

const OtherInfo = (props) => {
  return (
    <div>
      <h3 className="flexRow">Genres<p>{props.genres}</p></h3>
      <h3 className="flexRow">Director<p>{props.director}</p></h3>
      <h3 className="flexRow">Starring<p>{props.starring}</p></h3>
    </div>
  );
};

export default OtherInfo;