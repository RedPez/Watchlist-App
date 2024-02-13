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
        <Col key={result.show.id} xs={12} md={6} lg={3} xl={3} className="mb-3">
          <Card className="single-card">
            {result.show.image && (
              <div className="card-img-container">
                {" "}
                {/* Add card-img-container class here */}
                <Card.Img
                  // we need to change image for shows without images from the API
                  src={
                    result.show.image.original
                      ? result.show.image.original
                      : tvImage
                  }
                  alt={result.show.name}
                  className="card-img"
                />
              </div>
            )}
            <Card.ImgOverlay className="hover-text">
              <Card.Title className="card-title">{result.show.name}</Card.Title>
              <div className="result-btns">
                <ReviewModalWithButton show={result.show} />
                <AddButton show={result.show} />
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default DisplayCard;
