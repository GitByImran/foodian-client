import React, { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Provider";
// import { HiEye } from "react-icons/hi";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(name, email, password, photoUrl);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="my-5">
            <Form onSubmit={handleRegister} className="w-50 mx-auto p-3 border">
              <Form.Text className="text-muted fs-3 fw-bold">
                Registration
              </Form.Text>
              <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
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

              <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  name="photoUrl"
                  type="text"
                  label="Enter your valid photo url"
                  required
                />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    name="accept"
                    type="checkbox"
                    label="I accept all the terms and condition"
                  />
                </Form.Group>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
