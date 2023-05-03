import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../authentication/provider/Provider";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
  const { user } = useContext(AuthContext);
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
            <Nav className="d-flex gap-3 align-items-center">
              {user && (
                <Link to="#" className="fs-2 m-0 p-0">
                  <HiUserCircle />
                </Link>
              )}
              {user ? (
                <Link to="#" className="text-decoration-none nav-menu">
                  logout
                </Link>
              ) : (
                <Link to="/login" className="text-decoration-none nav-menu">
                  login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
