import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RatingStarInput from "./RatingStarInput";


const ReviewModalWithButton = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="review-btn" onClick={handleShow}>
        Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-img">X We need to add image here X</div>
          <div className="show-stats">
            <div>No. of Episodes:</div>
            <div>No. of Seasons:</div>
            <div>Country of Origin:</div>
            <div>Genre:</div>
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
          <div className="review-txt">Write your review here: </div>
          <div className="overall-rating">
            Overall rating: <RatingStarInput />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="modal-save-btn" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModalWithButton;
