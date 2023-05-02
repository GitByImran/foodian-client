import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipe = (data) => {
  const { id, picture, name, experience, recipes, likes } = data.data;
  return (
    <>
      <div className="recipe-content">
        <Card>
          <Card.Img variant="top" src={picture} className="chef-image" />
          <Card.Body>
            <Card.Title>
              <h3 className="fw-bold my-3">{name}</h3>
            </Card.Title>
            <div className="chef-info mb-4">
              <p className="my-1">
                Years of experience : <span>{experience}</span>
              </p>
              <p className="my-1">
                Total recipies : <span>{recipes}</span>
              </p>
              <p className="my-1">
                Total likes : <span>{likes}</span>
              </p>
            </div>
            <Button variant="dark">
              <Link
                className="text-light text-decoration-none"
                to={`/recipe/${id}`}
              >
                View Recipe
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Recipe;
