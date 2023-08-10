import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import logo from "../../images/newlogo.png";
import "./mobilenavigation.scss";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { menu, socialIcons } from "../NavigationBar/data";

const MobileNavigation = () => {
  
  
  return (
    <Row className={'navigation-bar mobile-header'} id="header">
      <Col className="logo-div col-lg-3">
        <img src={logo} alt="" />
      </Col>
      <Col className="navigation-menu col-lg-6">
        {menu.map((item, id) => (
          <div key={id} className="menu">
            {/* {item.title} */}
            <Link to={{ pathname: item.path }}>{item.title}</Link>
          </div>
        ))}
      </Col>
      <Col className="col-lg-3 navigation-end">
        <Button>Start a project</Button>
      </Col>
    </Row>
  );
};

export default MobileNavigation;

