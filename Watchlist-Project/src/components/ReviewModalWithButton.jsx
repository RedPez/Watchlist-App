import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RatingStarInput from "./RatingStarInput";

const ReviewModalWithButton = (props) => {
  const [show, setShow] = useState(false);
  const [reviewText, setReviewText] = useState(""); // State for review text

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveChanges = () => {
    // Collect all data
    const reviewData = {
      title: props.title,
      image: props.image, // Pass image from parent component
      characterRating: 0, // Update with actual character rating
      plotRating: 0, // Update with actual plot rating
      writingRating: 0, // Update with actual writing rating
      paceRating: 0, // Update with actual pace rating
      reviewText: reviewText,
      overallRating: 0 // Update with actual overall rating
    };

    // Retrieve existing reviews from local storage or initialize an empty array
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Add new review data to the array
    existingReviews.push(reviewData);

    // Sort reviews by overall rating in descending order
    existingReviews.sort((a, b) => b.overallRating - a.overallRating);

    // Update local storage with the updated reviews array
    localStorage.setItem("reviews", JSON.stringify(existingReviews));

    // Close the modal
    handleClose();
  };

  return (
    <>
      <Button class="review-btn" variant="primary" onClick={handleShow}>
        Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add image display */}
          <div className="modal-img"></div>
          
          
          <div className="character-rating">
            {" "}
            Characters: <RatingStarInput />
          </div>
          <div className="plot-rating">
            Plot/Content: <RatingStarInput />
          </div>
          <div className="writing-rating">
            Writing: <RatingStarInput />
          </div>
          <div className="pace-rating">
            Pace: <RatingStarInput />{" "}
          </div>

          <div className="review-txt">Write your review here: </div>
          {/* This is the text input field for the review  */}
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <div className="overall-rating">
            Overall rating: <RatingStarInput />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModalWithButton;
