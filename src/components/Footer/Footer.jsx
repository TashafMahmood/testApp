import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import logo from "../../images/newlogo.png";
import { Link } from "react-router-dom";
import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <Container fluid className="footer-main">
      <Row className="footer">
        <Col className="logo-div">
          <img src={logo} alt="" />
        </Col>
        <Col className="links-div">
          <div className="footer-link-title">Links</div>
          <div className="footer-navigation">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/careers"}>Careers</Link>
            <Link to={"/contact-us"}>Contact</Link>
          </div>
        </Col>
        <Col>
          <div className="footer-link-title">Contact Us</div>
          <div className="contact-icon-name">
            <BsWhatsapp />
            <span>+91-9696091041</span>
          </div>
          <div className="contact-icon-name">
            <BsWhatsapp />
            <span>+91-9696091041</span>
          </div>
          <div className="contact-icon-name">
            <BsWhatsapp />
            <span>+91-9696091041</span>
          </div>
          <div className="contact-icon-name">
            <BsWhatsapp />
            <span>+91-9696091041</span>
          </div>
        </Col>
        <Col>
          <div className="footer-link-title">Get Connected</div>
          <div className="footer-social-icons">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsTelegram />

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
