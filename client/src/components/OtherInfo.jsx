// Genres, Director, starring
import React from 'React';

const OtherInfo = (props) => {
  return (
    <div className="other_info">
      <h3 className="flexRow">Genres<p className="extra">{props.genres}</p></h3>
      <h3 className="flexRow">Director<p className="extra">{props.director}</p></h3>
      <h3 className="flexRow">Starring<p className="extra">{props.starring}</p></h3>
    </div>
  );
};

export default OtherInfo;