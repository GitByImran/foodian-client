import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../authentication/provider/Provider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
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
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? "active" : "",
                })}
                className="text-decoration-none nav-menu"
              >
                home
              </NavLink>
              <NavLink
                to="/blog"
                style={(isActive) => ({
                  color: isActive ? "active" : "",
                })}
                className="text-decoration-none nav-menu"
              >
                blog
              </NavLink>
            </Nav>

            <Nav className="d-flex gap-3 align-items-center mt-3 authenticate">
              {user && (
                <Link to="#" className="fs-2 m-0 p-0 user-profile">
                  <img src={user.photoURL} alt="" />
                </Link>
              )}

              {user ? (
                <Button onClick={handleLogOut} variant="dark">
                  <Link
                    to="#"
                    className="text-decoration-none text-light nav-menu"
                  >
                    logout
                  </Link>
                </Button>
              ) : (
                <NavLink
                  to="/login"
                  style={(isActive) => ({
                    color: isActive ? "active" : "",
                  })}
                  className="text-decoration-none nav-menu"
                >
                  login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
