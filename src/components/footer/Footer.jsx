import React from "react";
import { Container } from "react-bootstrap";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <Container>
        <div className="footer-content">
          <div className="email">
            <div className="image fs-1 text-dark bg-light my-3">
              <HiMail />
            </div>
            <h3 className="text-light fw-bold">CHART TO US</h3>
            <h5 className="text-light text-muted mt-2 mb-3">
              Our friendly team is here to help.
            </h5>
            <p className="text-light">foodian@company.com</p>
          </div>
          <div className="address">
            <div className="image fs-1 text-dark bg-light my-3">
              <HiLocationMarker />
            </div>
            <h3 className="text-light fw-bold">OFFICE</h3>
            <h5 className="text-light text-muted mt-2 mb-3">
              Come say hello at our office HQ.
            </h5>
            <p className="text-light">
              121 Rock Sreet, 21 Avenue, <br />
              New York, NY 92103-9000
            </p>
          </div>
          <div className="phone">
            <div className="image fs-1 text-dark bg-light my-3">
              <HiPhone />
            </div>
            <h3 className="text-light fw-bold">PHONE</h3>
            <h5 className="text-light text-muted mt-2 mb-3">
              Mon-Fri from 8am to 5am
            </h5>
            <p className="text-light">+1(555) 000-000</p>
          </div>
        </div>
      </Container>
      <center>
        <div>
          <h4 className="text-light text-muted fs-6 mt-5">
            Webpage owned & all right reserved by &copy; Foodian
          </h4>
        </div>
      </center>
    </div>
  );
};

export default Footer;
