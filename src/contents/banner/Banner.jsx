import React from "react";
import { FaAngleDown, FaBeer } from "react-icons/fa";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col className="pt-5 pb-3">
            <div className="banner-content py-5 text-center">
              <div className="banner-content-img text-center">
                <img src="https://i.ibb.co/VDrvx2j/Untitled-1.png" alt="" />
              </div>
              <div className="banner-content-text pt-5 pb-5 text-center">
                <h2 className="text-center">One Step to Making a Good Start</h2>
                <p className="text-center">
                  "Discover the Joy of Cooking with Our Amazing Recipe
                  Collection: From Quick & Easy Meals to Gourmet Delights, We
                  Have It All!"
                </p>
              </div>
              <div className="banner-content-extra text-center">
                <FaAngleDown />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
