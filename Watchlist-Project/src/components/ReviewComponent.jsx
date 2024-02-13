import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';
import FilterShows from './FilterShows'; 


const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Here we retrieve reviews from local storage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleEditReview = (index) => {
    // I was thinking that if we want to edit we will need to set an index in the ReviewModalWithButton that allows us to call it again and update the selected show
    setEditIndex(index);
  
    // After passing the index of the show we can show the modal with the relative show data 
    setShowEditModal(true);
  };

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
          stars.push(<FaStar key={i} color="gold" style={{ display: 'inline-block' }} />);
        }
        return <div>{stars}</div>;
      };

  return (
    <div>
      <h2>Reviews</h2>
      <FilterShows shows={reviews} onFilter={(genre, date) => console.log(genre, date)} />
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.title}</h3>
            {review.poster && <img src={review.poster} alt={review.title} />}
            <p>Characters Rating: {renderStarIcons(review.characterRating)}</p>
            <p>Plot Rating: {renderStarIcons(review.plotRating)}</p>
            <p>Writing Rating: {renderStarIcons(review.writingRating)}</p>
            <p>Pace Rating: {renderStarIcons(review.paceRating)}</p>
            <p>{review.reviewText}</p>
           
            <div>
              Overall Rating: {renderStarIcons(review.overallRating)}
            </div>
          
            <button onClick={() => handleEditReview(index)}>Edit</button>
            <button onClick={() => handleDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewComponent;
