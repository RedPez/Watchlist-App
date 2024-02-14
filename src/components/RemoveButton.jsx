import React from 'react';

const RemoveButton = ({ showId, removeFromWatchlist }) => {
  const handleRemove = () => {
    removeFromWatchlist(showId);
  };

  return (
    <button onClick={handleRemove}>Remove</button>
  );
};

export default RemoveButton;
