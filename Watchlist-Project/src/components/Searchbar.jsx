import React, { useState } from 'react';
import axios from 'axios';
import ReviewModalWithButton from './ReviewModalWithButton';




const Searchbar = () => {


const [searchTerm, setSearchTerm] = useState('');
const [searchResult, setSearchResult] = useState(null);
const [error, setError] = useState(null);
const handleSearch = async () => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    setSearchResult(response.data);
  } catch (error) {
    setError('An error occurred. Please try again later.');
  }
};

return (
  
  <div>
    <input
      type="text"
      placeholder="Enter show title"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
    {error && <div>{error}</div>}
    {searchResult && (
      /* card with tailwind */
      <div>
        {searchResult.map((item) => (
          <div key={item.show.id}>
            <h3>{item.show.name}</h3>
            {item.show.image && <img src={item.show.image.medium} alt={item.show.name} />}
            <ReviewModalWithButton name={item.show.name}/>
            <button>Add to Watchlist</button>
          </div>
        ))}
      </div>
    )}
    
  </div>
);
};

export default Searchbar;