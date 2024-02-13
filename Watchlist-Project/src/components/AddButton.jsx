import React from "react";

const AddButton = ({ show }) => {
  const handleAddToWatchlist = () => {
    const watchlistData = {
      id: show.id,
      name: show.name,
      image: {medium: show.image.medium, original: show.image.original},
    };

    saveToWatchlist(watchlistData);
  };

  const saveToWatchlist = (data) => {
    const existingWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];
  
    // We check if the show already exists in the watchlist using the some method, it basicaly checks whether at least one element in an array satisfies a specific condition
    const showExists = existingWatchlist.some(item => item.id === data.id);
  
    if (!showExists) {
      existingWatchlist.push(data);
  
      // Updates localStorage with the updated watchlist only if the show id is not in the localStorage
      localStorage.setItem("watchlist", JSON.stringify(existingWatchlist));
      console.log("Added to watchlist:", data);
    } else {
      console.log("Show already exists in watchlist:", data);
    }
  };
  

  return (
    <div>
      <button className="add-btn" onClick={handleAddToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default AddButton;
