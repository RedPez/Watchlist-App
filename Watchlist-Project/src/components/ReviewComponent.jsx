import React, { useEffect, useState } from "react";


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

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.title}</h3>
            
            <p>Characters Rating: {review.characterRating}</p>
            <p>Plot Rating: {review.plotRating}</p>
            <p>Writing Rating: {review.writingRating}</p>
            <p>Pace Rating: {review.paceRating}</p>
            <p>{review.reviewText}</p>
            <p>Overall Rating: {review.overallRating}</p>
            
            <button onClick={() => handleEditReview(index)}>Edit</button>
            <button onClick={() => handleDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewComponent;
