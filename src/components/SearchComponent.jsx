import React, { useState } from "react";

const SearchComponent = ({ reviews }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [searchResult, setSearchResult] = useState(null); // State for search results
  const [searched, setSearched] = useState(false); // State for tracking if search button has been pressed

  const handleSearch = () => {
    const result = reviews.find(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
    setSearched(true); // Update searched state after search button is pressed
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by show name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searched && !searchResult && (
        <p>Oopsy! Show not found.</p>
      )}
      {searchResult && (
        <div>
          <h2>{searchResult.name}</h2>
          <img src={searchResult.image} alt={searchResult.name} />
          <p>Overall Rating: {searchResult.overallRating}</p>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
