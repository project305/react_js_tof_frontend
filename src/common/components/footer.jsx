import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="position-absolute bottom-0 w-100">
      <Row className="w-100 m-0">
        <Col>Footer1</Col>
        <Col>Footer2</Col>
        <Col>Footer3</Col>
      </Row>
    </div>
  );
};

export default Footer;
