import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ReviewModalWithButton from "./ReviewModalWithButton";
import "./DisplayCard.css";
import "./component.css";
import tvImage from "../assets/site-logo.png";

const DisplayCard = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Card className="single-card" style={{ 
            height: '20rem',
            width: '20rem' }}>
            <Card.Img
              src={props.image?.original ? props.image.original : tvImage}
              alt={props.name}
              className="card-img"
            />
            <Card.ImgOverlay className="hover-text">
              <Card.Title className="card-title">{props.name}</Card.Title>
              <div className="result-btns">
                {props.action && <props.action show={props} />}
                <ReviewModalWithButton show={props} review={props.review} />
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayCard;
