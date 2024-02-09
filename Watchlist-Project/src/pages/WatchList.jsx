// WatchList.jsx
import React, { useState, useEffect } from 'react';

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (storedWatchlist) {
      setWatchlist(storedWatchlist);
    }
  }, []);

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            {item.poster && <img src={item.poster} alt={item.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

