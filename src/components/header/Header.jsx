import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container className="py-2">
          <Navbar.Brand href="#home" className="fs-2 fw-bold">
            Foodian
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto d-flex gap-3">
              <Link to="/" className="text-decoration-none nav-menu">
                home
              </Link>
              <Link to="/blog" className="text-decoration-none nav-menu">
                blog
              </Link>
              <Link to="/contact" className="text-decoration-none nav-menu">
                contact
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

// https://i.ibb.co/CBsLZ9Z/pexels-photo-3218467.jpg  -> cover photo
