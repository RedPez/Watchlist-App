import React from "react";
import { Col } from "react-bootstrap";
import "./DisplayCard.css";
import "./component.css";
import "./mediaqueries.css";
import DisplayCard from "./DisplayCard";


const DisplayCards = (props) => {
  return (
    <ul className="row flex-nowrap overflow-auto">
      {props.results.map((result) => (
        <Col
          as="li"
          key={result.id}
          xs={9}
          md={4}
          lg={3}
          xl={2} // make it xl{3} for 716X870px to 1080x803
          className="mb-3"
        >
          <DisplayCard
            {...result}
            action={props.action}
            buttonName={"✐ Review"}
          />
        </Col>
      ))}
    </ul>
  );
};

export default DisplayCards;
