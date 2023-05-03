import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-banner my-5">
      <Container>
        <Row>
          <Col className="my-5">
            <div className="special-discount">
              <p className="m-1">40%</p>
              <span>BUSINESS LUNCH</span>
            </div>
            <div className="feedback my-5">
              <h2 className="mb-3">Keep up to date with us</h2>
              <Form className="w-50 d-flex gap-3">
                <Form.Control
                  className="p-3 fs-5"
                  type="text"
                  placeholder="whats on your mind ...?"
                />
                <Button
                  variant="light"
                  className="text-dark text-decoration-none px-5 fs-5"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
