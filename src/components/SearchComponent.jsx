import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import { Col } from "react-bootstrap";
import "./component.css";
import "./mediaqueries.css";

const SearchComponent = ({ reviews, handleDeleteReview, renderStarIcons }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [messageDisplay, setMessageDisplay] = useState(""); // State for search term
  const [searchResult, setSearchResult] = useState(null); // State for search results
  const [searched, setSearched] = useState(false); // State for tracking if search button has been pressed
  const handleSearch = () => {
    const result = reviews.find((review) =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
    setSearched(true); // Update searched state after search button is pressed
  };

  const handleRemoveSearch = () => {
    setSearched(false)
    setSearchResult(null)
    setSearchTerm("")
  }

  let index = reviews.findIndex((el) => el == searchResult);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by show name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-txt"
      />
      <button onClick={handleSearch} className="filter-btn">
        Search
      </button>
      {searched && !searchResult && <p>Oopsy! Show not found.</p>}
      {searchResult && (
        <ul className="row no-scroll">
          <Col as="li" xs={9} md={4} lg={3} xl={2} className="mb-3">
            <DisplayCard
              name={searchResult.name}
              image={{ original: searchResult.image }}
              review={searchResult}
              id={searchResult.id}
              buttonName={"✐ Edit"}
              action={() => (
                <button
                  onClick={() => handleDeleteReview(index) || handleRemoveSearch(null)}
                  className="remove-btn"
                >
                  ✘ Remove
                </button>
              )}
            />
            <p className="p-txt"> Overall Rating: {renderStarIcons(searchResult.overallRating)}</p>
            
          </Col>
        </ul>
      )}
    </div>
  );
};
export default SearchComponent;
