import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="my-5">
            <Form className="w-25 mx-auto p-3 border">
              <Form.Text className="text-muted fs-3 fw-bold">Login</Form.Text>

              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                {/* <HiEye></HiEye> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="accept" type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Log in
              </Button>

              <Form.Text className="d-block mt-3">
                {" "}
                Don't have an account ? <Link to="/register"> Register</Link>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
