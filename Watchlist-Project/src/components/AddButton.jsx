import React from 'react';

const AddButton = ({ show }) => {
  const handleAddToWatchlist = () => {
    const watchlistData = {
      id: show.id,
      title: show.name,
      poster: show.image ? show.image.medium : null
    };

    // Save watchlistData to Watchlist.json (code for saving to JSON file not included here)
    saveToWatchlist(watchlistData);
  };

  const saveToWatchlist = (data) => {
      // Get existing watchlist from localStorage or initialize an empty array
  const existingWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  
  // Add new data to the watchlist
  existingWatchlist.push(data);
  
  // Update localStorage with the updated watchlist
  localStorage.setItem('watchlist', JSON.stringify(existingWatchlist));
    console.log('Added to watchlist:', data);
  };

  return (
    <div>
      <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default AddButton;