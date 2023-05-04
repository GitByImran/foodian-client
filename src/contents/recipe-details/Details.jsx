import { key } from "localforage";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "@smastrom/react-rating/style.css";
import "./Details.css";

const Details = () => {
  const [data] = useLoaderData();
  const recipies = data.featured_recipe;

  const [bookmarked, setBookmarked] = useState(false);

  const showMessge = (id) => {
    toast("this recipe is added to bookmark");
    setBookmarked(true);
  };

  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col className="my-3">
            <Button className="bg-dark">
              <Link to="/" className="text-light text-decoration-none">
                go back
              </Link>
            </Button>
            <ToastContainer />
          </Col>
        </Row>
        <Row className="chef-profile">
          <Col className="my-3">
            <Card className="d-flex flex-row align-items-center gap-3">
              <Card.Img
                variant="top"
                src={data.picture}
                className="chef-profile-image"
              />
              <Card.Body>
                <Card.Title>
                  <h3 className="fw-bold ">{data.name}</h3>
                </Card.Title>
                <p className="fs-6 lh-2 text-muted mb-3 p-0">{data.chefBio}</p>
                <div className="chef-info mb-4">
                  <p className="my-1">
                    Years of experience : <span>{data.experience}</span>
                  </p>
                  <p className="my-1">
                    Total recipies : <span>{data.recipes}</span>
                  </p>
                  <p className="my-1">
                    Total likes : <span>{data.likes}</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {recipies.map((item) => (
            <Col key={item.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold text-success">
                    {item.name}
                  </Card.Title>
                  <div className="ingredients">
                    <p className="text-muted fw-bold my-1">Ingredients :</p>
                    <ol>
                      {item.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="cooking">
                    <p className="text-muted fw-bold my-1">Cooking Method :</p>
                    <div
                      className="cooking-method p-2"
                      style={{ background: "#e4e4e4" }}
                    >
                      {item.cooking_method}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="m-0 d-flex align-items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(item.rating)}
                        readonly
                      />
                      <span className="mt-1">{item.rating}</span>
                    </div>
                    <button
                      onClick={showMessge}
                      disabled={bookmarked}
                      title="bookmark this recipe"
                      className="text-dark fs-4"
                      style={{ background: "none", border: "none" }}
                    >
                      <FaBookmark />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Details;
