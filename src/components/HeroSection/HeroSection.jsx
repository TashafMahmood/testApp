import React from "react";
import "./herosection.scss";
import { Col, Container, Row } from "react-bootstrap";
import heroImg from "../../images/hero.png";
import { heroData } from "./heroData";

const HeroSection = () => {
  console.log(heroData, "jjjjjjjjjj");
  return (
    <Container fluid className="hero-section">
      <Row>
        <Col style={{color:'white'}}>hiiiiiiiiiiii</Col>
        <Col className="hero-img">
          <img src={heroImg} alt="" />
        </Col>
      </Row>
      <Row className="column-row">
        {heroData.map((item, id) => (
          <Col className="column-header">
            <div>{item.desc}</div>
            <div className="icon">{item.icon}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HeroSection;
