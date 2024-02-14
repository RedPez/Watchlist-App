import React from "react";
import { Card, Col } from "react-bootstrap";
import ReviewModalWithButton from "./ReviewModalWithButton";
import AddButton from "./AddButton";
import "./DisplayCard.css";
import "./component.css";
import tvImage from "../assets/images/site-logo.png";

const DisplayCard = (props) => {
  return (
    <div className="row flex-nowrap overflow-auto">
      {props.results.map((result) => (
        <Col key={result.id} xs={12} md={6} lg={4} xl={3} className="mb-3">
          <Card className="single-card">
              <Card.Img 
              // we need to change image for shows without images from the API
                src={result.image?.original ? result.image.original : tvImage}
                alt={result.name}
                className="card-img"
              />
            
            <Card.ImgOverlay className="hover-text">
              <Card.Title className="card-title">{result.name}</Card.Title>
              <div className="result-btns">
                {props.action && <props.action 
                show={result}
                />}
                
                <ReviewModalWithButton show={result} />
                
                </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default DisplayCard;
