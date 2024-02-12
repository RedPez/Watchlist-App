import React from "react";
import { Card, Col } from "react-bootstrap";
import ReviewModalWithButton from "./ReviewModalWithButton";
import AddButton from "./AddButton";
import "./DisplayCard.css";

const DisplayCard = (props) => {
  return (
    <div className="row flex-nowrap overflow-auto">
      {props.results.map((result) => (
        <Col key={result.show.id} xs={12} md={6} lg={4} xl={3} className="mb-3">
          <Card>
            {result.show.image && (
              <Card.Img
                variant="top"
                src={result.show.image.original}
                alt={result.show.name}
              />
            )}
            <Card.Body>
              <Card.Title>{result.show.name}</Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <ReviewModalWithButton show={result.show} />
                <AddButton show={result.show} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default DisplayCard;
