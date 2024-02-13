import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import DisplayCard from "../components/DisplayCard";
import API from "../utils/API";

const Homepage = () => {
  const [searchData, setSearchData] = useState({
    search: "",
    results: [],
  });

  const searchTvShow = async (query) => {
    try {
      const response = await API.search(query);
      setSearchData({ ...searchData, results: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // When the form is submitted, search the TVmaze API for `searchData.search`
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    searchTvShow(searchData.search);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <Searchbar
        search={searchData.search}
        handleSearchSubmit={handleSearchSubmit}
        handleInputChange={handleInputChange}
      />
      <DisplayCard results={searchData.results} />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
