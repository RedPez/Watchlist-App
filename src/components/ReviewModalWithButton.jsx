import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RatingStarInput from "./RatingStarInput";
import API from "../utils/API";
import tvImage from "../assets/tv-show.png";

const handleStorage = () => {};

const ReviewModalWithButton = (props) => {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState([]);
  const [characterRating, setCharacterRating] = useState(
    props.review?.characterRating ?? 0
  );
  const [plotRating, setPlotRating] = useState(props.review?.plotRating ?? 0);
  const [writingRating, setWritingRating] = useState(
    props.review?.writingRating ?? 0
  );
  const [paceRating, setPaceRating] = useState(props.review?.paceRating ?? 0);
  const [overallRating, setOverallRating] = useState(
    props.review?.overallRating ?? 0
  );
  console.log(showDetails);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    try {
      const response = await API.getShowDetails(props.show.name);
      setShowDetails(response.data);
    } catch (error) {
      console.log(error);
    }

    setShow(true);
  };

  const [reviewText, setReviewText] = useState(props.review?.reviewText ?? ""); // State for review text

  const handleSaveChanges = () => {
    // Collect all data
    const reviewData = {
      name: props.show.name,
      image: props.show.image ? props.show.image.original : tvImage, // Pass image from parent component
      characterRating,
      plotRating,
      writingRating,
      paceRating,
      reviewText,
      overallRating,
      id: props.show.id,
    };

    console.log(props);

    // Retrieve existing reviews from local storage or initialize an empty array

    let storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if (Array.isArray(storedReviews)) {
      let index = storedReviews.findIndex((el) => el.id == reviewData.id);

      if (index !== -1) {
        storedReviews.splice(index, 1, reviewData);
      } else storedReviews.push(reviewData);
    }

    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    // // // Sort reviews by overall rating in descending order
    //  storedReviews.sort((a, b) => b.overallRating - a.overallRating);

    // // Update local storage with the updated reviews array

    // Add new review data to the array

    // existingReviews = existingReviews.map((el, id) => ({...el, id}))

    handleClose();

    // Close the modal
  };

  return (
    <>
      <Button className="review-btn" onClick={handleShow}>
        ✐ Review
      </Button>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">{props.show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            {/* we need to change image for shows without images from the API */}
            <div className="modal-img">
              {" "}
              <img
                src={props.show.image ? props.show.image.original : tvImage}
                alt={props.show.name}
              />
            </div>
            <div className="show-stats">
              <div>
                {" "}
                - Date Released:{" "}
                {showDetails.Released
                  ? showDetails.Released
                  : props.show.premiered}
              </div>
              <div>
                {" "}
                - No. of Seasons:{" "}
                {showDetails.totalSeasons
                  ? showDetails.totalSeasons
                  : "Data not available"}
              </div>
              <div>
                {" "}
                - Country of Origin:{" "}
                {showDetails.Country
                  ? showDetails.Country
                  : "Data not available"}
              </div>
              <div>
                {" "}
                - Genre:{" "}
                {showDetails.Genre ? showDetails.Genre : "Data not available"}
              </div>
            </div>
          </div>

          <div className="rating-cont">
            <div className="star-grid">
              <div className="character-rating">
                {" "}
                Characters:{" "}
                <RatingStarInput
                  value={characterRating}
                  onChange={setCharacterRating}
                />
              </div>
              <div className="plot-rating">
                Plot/Content:{" "}
                <RatingStarInput value={plotRating} onChange={setPlotRating} />
              </div>
              <div className="writing-rating">
                Writing:{" "}
                <RatingStarInput
                  value={writingRating}
                  onChange={setWritingRating}
                />
              </div>
              <div className="pace-rating">
                Pace:{" "}
                <RatingStarInput value={paceRating} onChange={setPaceRating} />{" "}
              </div>
            </div>

            <div className="review-txt">
              Write your review here:
              <textarea
                rows="4"
                cols="50"
                name="comment"
                form="userform"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                style={{ border: "2px solid black" }}
              ></textarea>
            </div>

            <div className="overall-rating">
              Overall rating:{" "}
              <RatingStarInput
                value={overallRating}
                onChange={setOverallRating}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
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
