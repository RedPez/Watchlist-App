import React from "react";
import { Card } from "react-bootstrap";
import ReviewModalWithButton from "./ReviewModalWithButton";
import "./DisplayCard.css";
import "./component.css";
import tvImage from "../assets/images/site-logo.png";

const DisplayCard = (props) => {
  return (
    
          <Card className="single-card">
              <Card.Img 
              // we need to change image for shows without images from the API
                src={props.image?.original ? props.image.original : tvImage}
                alt={props.name}
                className="card-img"
              />
            
            <Card.ImgOverlay className="hover-text">
              <Card.Title className="card-title">{props.name}</Card.Title>
              <div className="result-btns">
                {props.action && <props.action 
                show={props}
                />}
                
                <ReviewModalWithButton show={props} review={props.review} />
                
                </div>
            </Card.ImgOverlay>
          </Card>

  );
};

export default DisplayCard;