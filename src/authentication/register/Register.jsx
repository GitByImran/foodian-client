import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Provider, { AuthContext } from "../provider/Provider";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [accept, setAccept] = useState(false);
  const { createUser, userFound, userNotFound, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    createUser(email, password, name, photoURL)
      .then((result) => {
        const createdUser = result.user;
        updateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userFound) {
    toast("successfull login...! go to login page");
    setTimeout((userNotFound) => {
      navigate("/login");
    }, 3000);
  }

  const handleAccepted = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <div>
      <Container>
        <Row className="my-3">
          <Col>
            <Form onSubmit={handleRegister} className="w-50 mx-auto p-3 border">
              <Form.Text className="text-muted fs-3 fw-bold">
                Registration
              </Form.Text>
              <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="displayName"
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
                  name="photoURL"
                  type="text"
                  label="Enter your valid photo url"
                  required
                />

                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                  <Form.Check
                    onClick={handleAccepted}
                    name="accept"
                    type="checkbox"
                    label="I accept all the terms and condition"
                  />
                </Form.Group>
              </Form.Group>

              <Button variant="primary" disabled={!accept} type="submit">
                Register
              </Button>

              <Form.Text className="d-block mt-3 fs-5">
                {" "}
                Already have an account ? <Link to="/login"> Login </Link> now
              </Form.Text>
            </Form>
          </Col>
          <ToastContainer />
        </Row>
      </Container>
    </div>
  );
};

export default Register;
