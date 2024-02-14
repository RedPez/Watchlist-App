import React from 'react';

const RemoveButton = ({ showId, removeFromWatchlist }) => {
  const handleRemove = () => {
    removeFromWatchlist(showId);
  };

  return (
    <button onClick={handleRemove} className='remove-btn'>✘ Remove</button>
  );
};

export default RemoveButton;
