import React from "react";
import Navbar from "../components/Navbar";
import SearchResultContainer from "../components/SearchResultContainer";

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <SearchResultContainer />
      </div>
    </div>
  );
};

export default Homepage;
