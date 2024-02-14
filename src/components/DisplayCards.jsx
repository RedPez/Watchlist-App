import React from "react";
import { Col } from "react-bootstrap";
import "./DisplayCard.css";
import "./component.css";
import DisplayCard from "./DisplayCard";

const DisplayCards = (props) => {
  return (
    <ul className="row flex-nowrap overflow-auto">
      {props.results.map((result) => (
        <Col as="li" key={result.id} xs={12} md={6} lg={4} xl={3} className="mb-3">
          <DisplayCard {...result} action={props.action}/>
            
        </Col>
      ))}
    </ul>
  );
};

export default DisplayCards;
