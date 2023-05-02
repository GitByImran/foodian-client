import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Recipes.css";

const Recipes = () => {
  const allRecipies = useLoaderData();
  const [recipies, setRecipies] = useState(6);

  return (
    <div>
      <Container className="">
        <div className="section-title text-center py-5">
          <p className="text-uppercase m-1">our menu</p>
          <h2 className="text-capitalize fs-1 fw-bold">
            delicious from the chef
          </h2>
        </div>
        <Row>
          <Col className="all-recipe pb-5">
            {allRecipies.slice(0, recipies).map((data) => (
              <Recipe key={data.id} data={data}></Recipe>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {recipies === 6 ? (
              <Button
                onClick={() => setRecipies(10)}
                variant="dark"
                className="px-4 py-2"
              >
                Show More Chef
              </Button>
            ) : (
              <Button
                onClick={() => setRecipies(6)}
                variant="dark"
                className="px-4 py-2"
              >
                Show less Chef
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipes;


// https://i.ibb.co/Cw2NZ6q/image.png // for about page
// https://i.ibb.co/T2SpZd3/vegetables-set-left-black-slate.jpg //feedback pagej