import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Provider";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn, auth, googleRegister } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const getGoogleUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const getGithubUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div style={{ height: "80vh" }}>
      <Container>
        <Row>
          <Col className="my-5">
            <Form onSubmit={handleLogin} className="w-100 mx-auto p-3 border">
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

              <p className="my-3">{error.slice(10)}</p>

              <Button variant="primary" type="submit">
                Log in
              </Button>

              <Form.Text className="d-block mt-3 fs-5">
                {" "}
                Don't have an account ? <Link to="/register"> Register</Link>
              </Form.Text>
            </Form>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div>OR --- </div>
            <Button onClick={handleGoogle}>
              <FaGithub className="me-2" /> sign up with google
            </Button>
            <Button onClick={handleGithub}>
              <FaGoogle className="me-2" /> sign up with github
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
