// WatchListComponent.jsx
import React from 'react';
import RemoveButton from './RemoveButton';
import DisplayCards from './DisplayCards';

const WatchList = (props) => {
  console.log(props)
  return (
    <div>
      <div>
      <DisplayCards
        results={props.watchlist}
        action={ ({show}) =>  <RemoveButton showId={show.id} removeFromWatchlist={props.removeFromWatchlist} />}
       ></DisplayCards>
      </div>
    </div>
  );
};

export default WatchList;