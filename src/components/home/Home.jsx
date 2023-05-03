import React from "react";
import Banner from "../../contents/banner/Banner";
import Recipes from "../../contents/recipes/Recipes";
import { useLoaderData, useParams } from "react-router-dom";
import About from "../../contents/about/About";
import Feedback from "../../contents/feedback/Feedback";
import Features from "../../contents/features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recipes></Recipes>
      <Features></Features>
      <About></About>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
