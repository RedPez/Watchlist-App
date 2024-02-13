import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RatingStarInput from './RatingStarInput';
import API from "../utils/API";
import tvImage from "../assets/images/tv-show.png"

const ReviewModalWithButton = (props) => {
  
const [show, setShow] = useState(false);
const [showDetails, setShowDetails] = useState([]);
console.log(showDetails)
const handleClose = () => setShow(false);
const handleShow = async () => {

    try {
        const response =  await API.getShowDetails(props.show.name)
        setShowDetails(response.data);
      } catch (error) {
       console.log(error)
      }
    
  setShow(true)};

  const [reviewText, setReviewText] = useState(""); // State for review text


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
      <Button className="review-btn" onClick={handleShow}>
        Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/* we need to change image for shows without images from the API */}
          <div className='modal-img'>{props.show.image && <img src={props.show.image ? props.show.image.original : tvImage} alt={props.show.name} />}</div>
          <div className='show-stats'>
          <div>Date Released: {showDetails.Released ? showDetails.Released : props.show.premiered}</div>
          <div>No. of Seasons: {showDetails.totalSeasons ? showDetails.totalSeasons : "Data not available"}</div>
          <div>Country of Origin: {showDetails.Country ? showDetails.Country : "Data not available" }</div>
          <div>Genre: { showDetails.Genre ? showDetails.Genre : "Data not available" }</div>
          </div>


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

          <div className="review-txt">Write your review here: 
          <textarea 
          rows="4" 
          cols="50" 
          name="comment" 
          form="userform"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          style={{border: "1px solid black"}}
          >
          </textarea>
          </div>

          <div className="overall-rating">
            Overall rating: <RatingStarInput />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="modal-save-btn" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModalWithButton;
