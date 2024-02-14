import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import WatchlistComponent from "../components/WatchlistComponent"
import Footer from '../components/Footer'


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
    <>
    <Navbar/> 
    <h2>My Watchlist</h2>
    <WatchlistComponent 
    watchlist={watchlist}
    removeFromWatchlist={removeFromWatchlist}
    />
    </> 
  )
}

export default WatchList


