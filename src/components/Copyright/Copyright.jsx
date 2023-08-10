import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import './copyright.scss'

const Copyright = () => {
  return (
    <Container fluid>
      <Row className="copyright">
        <Col>
            <BiCopyright />
          <span className="company-name">2023 Eduweb Technologies</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Copyright;
