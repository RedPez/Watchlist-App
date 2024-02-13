// WatchListComponent.jsx
import React from 'react';
import ReviewModalWithButton from './ReviewModalWithButton';
import RemoveButton from './RemoveButton';

const WatchList = (props) => {
  return (
    <div>
      <div>
        {props.watchlist.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            {item.poster && <img src={item.poster} alt={item.title} />}
            <div>
              <ReviewModalWithButton show={item} />
              <RemoveButton showId={item.id} removeFromWatchlist={props.removeFromWatchlist} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;