import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RatingStarInput from './RatingStarInput';
import API from "../utils/API";

const ReviewModalWithButton = (props) => {
const [show, setShow] = useState(false);
const [showSeasons, setShowSeasons] = useState([]);
console.log(showSeasons)
const handleClose = () => setShow(false);
const handleShow = async () => {

    try {
        const response =  await API.getShowSeasons(props.show.id)
        setShowSeasons(response.data);
      } catch (error) {
       console.log(error)
      }
    
  setShow(true)};


  return (
    <>
    <Button variant="primary" onClick={handleShow}>Review</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-img'><img src={props.show.image.original} alt={props.show.name} /></div>
          <div className='show-stats'>
          <div>Date Released: {new Intl.DateTimeFormat('en-GB').format(new Date(props.show.premiered))}</div>
          <div>No. of Seasons: {showSeasons.length}</div>
          <div>Country of Origin: {props.show.network.country.name}</div>
          <div>Genre: {props.show.genres.join(", ")}</div>
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
          style={{border: "1px solid black"}}
          >
          </textarea>
          </div>
          <div className="overall-rating">
            Overall rating: <RatingStarInput />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModalWithButton;
