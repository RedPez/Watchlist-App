// WatchList.jsx
import React, { useState, useEffect } from 'react';
import ReviewModalWithButton from '../components/ReviewModalWithButton';
import RemoveButton from '../components/RemoveButton';

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (storedWatchlist) {
      setWatchlist(storedWatchlist);
    }
  }, []);

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter(item => item.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            {item.poster && <img src={item.poster} alt={item.title} />}
            <div>
              <ReviewModalWithButton show={item} />
              <RemoveButton showId={item.id} removeFromWatchlist={removeFromWatchlist} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

