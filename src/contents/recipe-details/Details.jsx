import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const [data] = useLoaderData();
  const {
    image,
    name,
    ingredients,
    cooking_method,
    rating,
    favorite,
    specialty,
  } = data.featured_recipe;
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col className="my-3">
            <Button className="bg-danger">
              <Link to="/" className="text-light text-decoration-none">
                go back
              </Link>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title className="fw-bold text-success">{name}</Card.Title>
                <div className="ingredients">
                  <p className="text-muted fw-bold my-1">Ingredients :</p>
                  <ol>
                    {ingredients.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="cooking">
                  <p className="text-muted fw-bold my-1">Cooking Method :</p>
                  <div
                    className="cooking-method p-2"
                    style={{ background: "#e4e4e4" }}
                  >
                    {cooking_method}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="m-0">{rating}</p>
                  <button>bookmark</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title className="fw-bold text-success">{name}</Card.Title>
                <div className="ingredients">
                  <p className="text-muted fw-bold my-1">Ingredients :</p>
                  <ol>
                    {ingredients.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="cooking">
                  <p className="text-muted fw-bold my-1">Cooking Method :</p>
                  <div
                    className="cooking-method p-2"
                    style={{ background: "#e4e4e4" }}
                  >
                    {cooking_method}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="m-0">{rating}</p>
                  <button>bookmark</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title className="fw-bold text-success">{name}</Card.Title>
                <div className="ingredients">
                  <p className="text-muted fw-bold my-1">Ingredients :</p>
                  <ol>
                    {ingredients.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="cooking">
                  <p className="text-muted fw-bold my-1">Cooking Method :</p>
                  <div
                    className="cooking-method p-2"
                    style={{ background: "#e4e4e4" }}
                  >
                    {cooking_method}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="m-0">{rating}</p>
                  <button>bookmark</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
