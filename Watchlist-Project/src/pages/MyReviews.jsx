import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewComponent from "../components/ReviewComponent";

const MyReviews = () => {
  return (
    <>
      <Navbar />
      My Reviews
      <ReviewComponent />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
};

export default MyReviews;
