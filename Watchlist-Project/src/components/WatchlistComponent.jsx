// WatchListComponent.jsx
import React from 'react';
import RemoveButton from './RemoveButton';
import DisplayCard from './DisplayCard';

const WatchList = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Watchlist</h2>
      <div>
      <DisplayCard
        results={props.watchlist}
        action={ ({show}) =>  <RemoveButton showId={show.id} removeFromWatchlist={props.removeFromWatchlist} />}
       ></DisplayCard>
      </div>
    </div>
  );
};

export default WatchList;