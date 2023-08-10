import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";
import Careers from "./components/Careers/Careers";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

const Routing = () => {
  return (
    <BrowserRouter>
      <Container fluid className="nav-container">
        <NavigationBar />
        <MobileNavigation/>
      </Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
      <Copyright />
    </BrowserRouter>
  );
};

export default Routing;
