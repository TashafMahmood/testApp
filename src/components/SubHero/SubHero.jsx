import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./subhero.scss";
import { boxData } from "./data";

const SubHero = () => {
  return (
    <Container fluid className="sub-hero">
      <Row>
        <Col className="title">
          We Offer a Wide
          <br />
          Variety of IT Services
        </Col>
      </Row>
      <Row className="services-row">
        {boxData.map((item, id) => (
          <Col lg={4} className="services-column" key={id}>
            <i class={item.iconClass}></i>
            <div className="box-title">{item.title}</div>
            <div>{item.description}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubHero;
