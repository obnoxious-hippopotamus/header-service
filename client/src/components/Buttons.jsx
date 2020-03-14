// watch, watch trailer, more purchase options, remove from watchlist
import React from 'react';

const Buttons = () => {
  return (
    <div>
      <span>
        <button className="watchNow" type="button">Watch Now</button>
      </span>
      <span className="watchTrailer">
        <button type="button">Watch Trailer</button>
      </span>
      <span className="purchaseOptions">
        <button type="button">More purchase options</button>
      </span>
      <span className="watchlist">
        <button type="button">Add to Watchlist</button>
      </span>
    </div>
  );
};

export default Buttons;