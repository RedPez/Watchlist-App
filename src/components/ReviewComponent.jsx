import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import FilterShows from "./FilterShows";
import DisplayCard from "./DisplayCard";
import { Col } from "react-bootstrap";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Here we retrieve reviews from local storage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleDeleteReview = (index) => {
    // This emoves the selected review from the reviews array in te local storage
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);

    // Update local storage with the updated reviews array
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  // Function to render star icons based on overall rating
  const renderStarIcons = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <FaStar key={i} color="gold" style={{ display: "inline-block" }} />
      );
    }
    return <div>{stars}</div>;
  };

  return (
    <div>
      {reviews.length > 0 && (
        <FilterShows
          shows={reviews}
          onFilter={(genre, date) => console.log(genre, date)}
        />
      )}

      <ul className="row flex-nowrap overflow-auto">
        {reviews.map((review, index) => (

          <Col as="li" key={index} xs={12} md={6} lg={4} xl={3} className="mb-3">
            <DisplayCard 
            name={review.name}
            image={{original: review.image}}
            review={review}
            id={review.id}
            buttonName= {"✐ Edit"}
            action={() => <button onClick={() => handleDeleteReview(index)}>Delete</button>}
            />
            Overall Rating: {renderStarIcons(review.overallRating)}
          </Col>
        ))}
      </ul>
    </div>
  );
};

export default ReviewComponent;
