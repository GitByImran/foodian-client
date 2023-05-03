import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Features.css";
import {
  FaBirthdayCake,
  FaChessPawn,
  FaCocktail,
  FaHamburger,
  FaIceCream,
  FaPizzaSlice,
  FaSoap,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="features-banner my-5">
      <Container className="my-5">
        <Row className="d-flex flex-column gap-3">
          <div className="text-muted" style={{ textAlign: "right" }}>
            <h1>What's about snacks ...!</h1>
          </div>
          <Col className="d-flex justify-content-end gap-3">
            <div className="feature-item">
              <div className="feature-item-img">
                <FaIceCream></FaIceCream>
              </div>
              <div className="feature-item-text">
                <h2>Ice Cream</h2>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-img">
                <FaCocktail></FaCocktail>
              </div>
              <div className="feature-item-text">
                <h2>Cocktail</h2>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-img">
                <FaHamburger></FaHamburger>
              </div>
              <div className="feature-item-text">
                <h2>Burger</h2>
              </div>
            </div>
          </Col>
          <Col className="d-flex d-flex justify-content-end gap-3">
            <div className="feature-item">
              <div className="feature-item-img">
                <FaPizzaSlice></FaPizzaSlice>
              </div>
              <div className="feature-item-text">
                <h2>Pizza</h2>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-img">
                <FaBirthdayCake></FaBirthdayCake>
              </div>
              <div className="feature-item-text">
                <h2>Cake</h2>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-img">
                <FaSoap></FaSoap>
              </div>
              <div className="feature-item-text">
                <h2>soap</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
