import React from "react";

const AddButton = ({ show }) => {
  const handleAddToWatchlist = () => {
    const watchlistData = {
      id: show.id,
      title: show.name,
      poster: show.image ? show.image.medium : null,
    };

    saveToWatchlist(watchlistData);
  };

  const saveToWatchlist = (data) => {
    const existingWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    existingWatchlist.push(data);

    // Update localStorage with the updated watchlist
    localStorage.setItem("watchlist", JSON.stringify(existingWatchlist));
    console.log("Added to watchlist:", data);
  };

  return (
    <div>
      <button className="add-btn" onClick={handleAddToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default AddButton;
