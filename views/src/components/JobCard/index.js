import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

const JobCard = (props) => {
  return (
    <Card style={{ width: "20rem", height: "10rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.details}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
