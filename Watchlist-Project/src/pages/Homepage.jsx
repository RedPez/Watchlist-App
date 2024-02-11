import React from "react";
import Navbar from "../components/Navbar";
import SearchResultContainer from "../components/SearchResultContainer";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <SearchResultContainer />
        <Hero />
        <Footer/>
    </div>
  );
};


export default Homepage;
