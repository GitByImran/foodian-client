import React from "react";
import Banner from "../../contents/banner/Banner";
import Recipes from "../../contents/recipes/Recipes";
import { useLoaderData, useParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
};

export default Home;
