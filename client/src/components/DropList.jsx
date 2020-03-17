import React from 'react';

const DropList = (props) => {
  return (
    <select onChange={props.onChange} id="simple" name="simple">
      <option defaultValue>None</option>
      {props.titles.map(title => {
        return <option key={title.movie_id}>{title.title}</option>;
      })}

    </select>
  );
};

export default DropList;