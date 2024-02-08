import React from "react";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        Homepage
        <Searchbar />
      </div>
    </div>
  );
};

export default Homepage;
